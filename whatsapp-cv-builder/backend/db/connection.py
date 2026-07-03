import logging
from pymongo import MongoClient
from pymongo.collection import Collection
from typing import Optional
from config import MONGODB_URI, DB_NAME

logger = logging.getLogger(__name__)

# --- Singleton MongoDB client -------------------------------------------
# MongoClient is thread-safe and connection-pooled; create it once.
_client: Optional[MongoClient] = None

def get_client() -> MongoClient:
    global _client
    if _client is None:
        _client = MongoClient(MONGODB_URI)
    return _client

def get_db():
    return get_client()[DB_NAME]

# --- Typed collection accessors -----------------------------------------
def candidates_col() -> Collection:
    return get_db()["candidates"]

def jobs_col() -> Collection:
    return get_db()["jobs"]

def messages_col() -> Collection:
    return get_db()["conversation_messages"]

def ping():
    """Verify connectivity to Atlas on startup."""
    get_client().admin.command("ping")
    logger.info("MongoDB Atlas connection: OK  (database: %s)", DB_NAME)
