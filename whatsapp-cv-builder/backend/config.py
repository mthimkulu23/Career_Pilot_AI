import os
from dotenv import load_dotenv

# Path to the backend directory
basedir = os.path.abspath(os.path.dirname(__file__))

# Load environment variables from the absolute path of .env
load_dotenv(os.path.join(basedir, '.env'))

class Config:
    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/my_database")
