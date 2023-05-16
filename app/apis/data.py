from flask import Blueprint, jsonify, request
from flask_mysqldb import MySQL
from ..server import mysql
import pandas as pd
import json
import csv

api = Blueprint("data",
                __name__,
                url_prefix="/apis/data")

file = open("./Fifa 23 Players Data.csv", "r")
csvreader = csv.DictReader(file)

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

@api.route("/star", methods=["POST"])
def calculateCompetitiveness():
    json_object = request.get_json()
    squad_overall = []
    for elm in json.loads(json_object["squads"]):
        if (not elm):
            squad_overall.append(0)
        else:
            squad_overall.append(int(elm["overall"]))
    
    sr = pd.Series(squad_overall)
    mean = sr.mean()
    print(mean)

    file.seek(0)
    csvreader = csv.DictReader(file)
    overalls = []
    for row in csvreader:
        overalls.append(int(row["Overall"]))
    
    sr2 = pd.Series(overalls)
    percentile = sr2.quantile([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.75, 0.85, 0.95, 0.99])
    print(percentile)

    index = 0
    
    for i, v in percentile.items():
        print("value: " + str(v))
        if (mean < v):
            return jsonify(index * 0.5)
        else:
            index = index + 1
        
    return jsonify(0.5 * len(percentile))


