import logging
from pymongo import MongoClient
from pymongo.collection import Collection
from pymongo.database import Database
from typing import Optional, Any
from config import MONGODB_URI, DB_NAME

logger = logging.getLogger(__name__)

# --- Singleton MongoDB client -------------------------------------------
# MongoClient is thread-safe and connection-pooled; create it once.
_client: Optional[MongoClient] = None

def get_client() -> MongoClient:
    global _client
    if _client is None:
        _client = MongoClient(MONGODB_URI)
    assert _client is not None
    return _client

def get_db() -> Database:
    return get_client()[DB_NAME]

# --- Typed collection accessors -----------------------------------------
def candidates_col() -> Collection[Any]:
    return get_db()["candidates"]

def jobs_col() -> Collection[Any]:
    return get_db()["jobs"]

def messages_col() -> Collection[Any]:
    return get_db()["conversation_messages"]

def users_col() -> Collection[Any]:
    return get_db()["users"]

def ping():
    """Verify connectivity to Atlas on startup."""
    get_client().admin.command("ping")
    logger.info("MongoDB Atlas connection: OK  (database: %s)", DB_NAME)
