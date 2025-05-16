from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os
from dotenv import load_dotenv
from urllib.parse import quote_plus

load_dotenv()
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    user = os.getenv("MYSQL_USER")
    password = quote_plus(os.getenv("MYSQL_PASSWORD"))
    host = os.getenv("MYSQL_HOST")
    database = os.getenv("MYSQL_DB")

    app.config['SQLALCHEMY_DATABASE_URI'] = (
        f"mysql+mysqlconnector://{user}:{password}@{host}/{database}"
    )
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return app