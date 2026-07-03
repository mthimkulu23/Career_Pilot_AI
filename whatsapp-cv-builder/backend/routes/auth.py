"""
Authentication routes for user registration and JWT retrieval.
"""
from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr, Field
from db.connection import users_col
from db.users import new_user, UserRole
from services.auth_service import get_password_hash, verify_password, create_access_token

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

class RegisterPayload(BaseModel):
    email: str = Field(..., description="Unique email address for registration")
    password: str = Field(..., min_length=6, description="Password must be at least 6 characters")
    role: UserRole = Field(default=UserRole.CANDIDATE, description="Role: CANDIDATE, EMPLOYER, or ADMIN")

class LoginResponse(BaseModel):
    access_token: str
    token_type: str
    role: str
    email: str

@router.post("/register", status_code=status.HTTP_201_CREATED)
def register(payload: RegisterPayload):
    """
    Register a new user in the system with Candidate, Employer, or Admin roles.
    """
    col = users_col()
    
    # Check if email is already taken
    email_clean = payload.email.lower().strip()
    if col.find_one({"email": email_clean}):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A user with this email address already exists."
        )
    
    # Create the user document
    hashed_pwd = get_password_hash(payload.password)
    try:
        user_doc = new_user(
            email=payload.email,
            hashed_password=hashed_pwd,
            role=payload.role.value
        )
        col.insert_one(user_doc)
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
        
    return {"message": "Registration successful. You can now log in."}


@router.post("/login", response_model=LoginResponse)
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    """
    OAuth2 compatible login route returning a JWT token on successful verification.
    """
    col = users_col()
    email_clean = form_data.username.lower().strip()
    
    user = col.find_one({"email": email_clean})
    if not user or not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password.",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    # Generate token with user details
    access_token = create_access_token(data={"sub": user["email"], "role": user["role"]})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "role": user["role"],
        "email": user["email"]
    }
