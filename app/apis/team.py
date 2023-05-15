from flask import Blueprint, jsonify
import csv


api = Blueprint("team",
                __name__,
                url_prefix="/apis/team")

file = open("./Fifa 23 Players Data.csv", "r")
csvreader = csv.DictReader(file)


@api.route("")
def getAll():
    file.seek(0)
    team_set = set()
    for row in csvreader:
        team_set.add(row["Club Name"])
    
    return jsonify(list(team_set), 200)

@api.route("/<name>")
def get_by_name(name):
    newName = name.replace("-", " ")
    file.seek(0)
    for row in csvreader:
        if row["Full Name"] == newName:
            return jsonify(row, 200)
    return "Not found"
