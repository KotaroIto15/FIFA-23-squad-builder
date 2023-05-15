from flask import Blueprint, jsonify
from unidecode import unidecode
import csv

api = Blueprint("player",
                __name__,
                url_prefix="/apis/player")

file = open("./Fifa 23 Players Data.csv", "r")
csvreader = csv.DictReader(file)

@api.route("/<name>")
def get_by_name(name):
    file.seek(0)
    res = []
    for row in csvreader:
        rowName = row["Full Name"]
        alpName = unidecode(rowName)
        if name in alpName.lower().replace(" ", ""):
            fullName = row["Full Name"]
            firstName = fullName[0:fullName.find(" ")]
            lastName = fullName[fullName.find(" ") + 1:]
            newName = firstName[0] + ". " + lastName

            elm = {
                "name" : newName,
                "overall" : row["Overall"],
                "image" : row["Image Link"]
            }
            res.append(elm)

            if (len(res) == 13): break

    
    return jsonify(res) if res else ["Not found"]