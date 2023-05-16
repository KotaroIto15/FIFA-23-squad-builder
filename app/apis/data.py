from flask import Blueprint, jsonify, request
from flask_mysqldb import MySQL
from ..server import mysql
import json

api = Blueprint("data",
                __name__,
                url_prefix="/apis/data")

@api.route("/save", methods=['POST'])
def saveSquad():
    json_object = request.get_json()
    squadName = json_object["name"]
    squads = json_object["squads"]
    cursor = mysql.connection.cursor()
    cursor.execute(''' INSERT INTO Squads VALUES (%s, %s) ''', (squadName, squads))
    mysql.connection.commit()
    cursor.close()

    return "DONE"
    
@api.route("/load/<name>")
def loadSquad(name):
    newName = name.replace("-", " ")
    cursor = mysql.connection.cursor()
    cursor.execute(''' SELECT * FROM Squads WHERE name = %s''', (newName, ))
    res = cursor.fetchone()
    mysql.connection.commit()
    cursor.close()

    res = {
        "name": res[0],
        "squad": res[1]
    }

    print(res)

    return res


