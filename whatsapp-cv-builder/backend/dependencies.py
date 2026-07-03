"""
FastAPI dependency injections for authenticating requests and enforcing RBAC.
"""
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from bson import ObjectId
from typing import Optional
from db.connection import users_col
from services.auth_service import decode_access_token

# Define standard OAuth2 bearer scheme pointing to login route
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login")

async def get_current_user(token: str = Depends(oauth2_scheme)) -> dict:
    """
    Validates token from Authorization header and returns the active user from MongoDB.
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    payload = decode_access_token(token)
    if payload is None:
        raise credentials_exception
        
    email: Optional[str] = payload.get("sub")
    if email is None:
        raise credentials_exception
        
    col = users_col()
    user = col.find_one({"email": email})
    if user is None:
        raise credentials_exception
        
    # Standardize string ID mapping
    user["id"] = str(user["_id"])
    return user


class RoleChecker:
    """
    Dependency helper to restrict route access to specific user roles.
    """
    def __init__(self, allowed_roles: list[str]):
        self.allowed_roles = [role.upper() for role in allowed_roles]

    def __call__(self, current_user: dict = Depends(get_current_user)) -> dict:
        user_role = current_user.get("role", "").upper()
        if user_role not in self.allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Access denied. Required roles: {self.allowed_roles}",
            )
        return current_user
