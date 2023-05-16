from flask import Flask
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

print(os.getenv("USER_NAME"))

app.config["MYSQL_HOST"] = os.getenv("HOST")
app.config["MYSQL_USER"] = os.getenv("USER_NAME")
app.config["MYSQL_PASSWORD"] = os.getenv("PASSWORD")
app.config["MYSQL_DB"] = os.getenv("DB_NAME")
mysql = MySQL(app)


from app.apis import team
from app.apis import player
from app.apis import data

app.register_blueprint(team.api)
app.register_blueprint(player.api)
app.register_blueprint(data.api)
