import csv
import pprint

with open("./Fifa 23 Players Data.csv", "r") as file:
    csvreader = csv.DictReader(file)
    l = [row for row in csvreader]
