import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse current user', e);
        localStorage.removeItem('currentUser');
      }
    }
    setLoading(false);
  }, []);

  const ADMIN_SEED = {
    name: 'Admin',
    surname: 'User',
    email: 'admin@example.com',
    password: 'Admin@12345',
    role: 'admin',
  };

  const seedAdminIfMissing = () => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const exists = users.some((u) => u.email?.toLowerCase() === ADMIN_SEED.email.toLowerCase());
      if (!exists) {
        users.push({
          name: ADMIN_SEED.name,
          surname: ADMIN_SEED.surname,
          email: ADMIN_SEED.email,
          password: ADMIN_SEED.password,
          role: ADMIN_SEED.role,
        });
        localStorage.setItem('users', JSON.stringify(users));
      }
    } catch {
      // no-op
    }
  };

  useEffect(() => {
    seedAdminIfMissing();
    // Check if user is already logged in from localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse current user', e);
        localStorage.removeItem('currentUser');
      }
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (email, password) => {
    // Ensure admin exists in localStorage for this demo
    seedAdminIfMissing();

    // Fast path for admin credentials
    if (
      email.toLowerCase() === ADMIN_SEED.email.toLowerCase() &&
      password === ADMIN_SEED.password
    ) {
      const sessionUser = {
        name: ADMIN_SEED.name,
        surname: ADMIN_SEED.surname,
        email: ADMIN_SEED.email,
        role: ADMIN_SEED.role,
      };
      localStorage.setItem('currentUser', JSON.stringify(sessionUser));
      setUser(sessionUser);
      return { success: true, message: 'Logged in successfully!' };
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (foundUser) {
      const sessionUser = {
        name: foundUser.name,
        surname: foundUser.surname,
        email: foundUser.email,
        role: foundUser.role,
      };
      localStorage.setItem('currentUser', JSON.stringify(sessionUser));
      setUser(sessionUser);
      return { success: true, message: 'Logged in successfully!' };
    }

    return { success: false, message: 'Invalid email or password.' };
  };

  const register = (name, surname, email, password, role) => {
    // Block creation of admin accounts from the register page
    if (role === 'admin') {
      return { success: false, message: 'Admin accounts are pre-created. Please contact support.' };
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const emailExists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());

    if (emailExists) {
      return { success: false, message: 'Email is already registered.' };
    }

    const newUser = { name, surname, email, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Registration successful! You can now log in.' };
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
