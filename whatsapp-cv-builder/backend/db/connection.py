from pymongo import MongoClient
from config import Config

# Establish database connection client
client = MongoClient(Config.MONGO_URI)

# Attempt to extract the default database from the URI
try:
    db = client.get_default_database()
except Exception:
    db = client["my_database"]

def get_db():
    """Returns the shared database instance."""
    return db
