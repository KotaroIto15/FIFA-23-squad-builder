from flask import Flask
from app.apis import team
from app.apis import player
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

app.register_blueprint(team.api)
app.register_blueprint(player.api)
