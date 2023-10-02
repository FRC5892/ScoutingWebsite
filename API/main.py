from typing import Union
import requests
from fastapi import FastAPI
import json

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/robot/{team_num}")
def read_item(team_num: int):
    final = '{ "Matches": [] }'
    final = json.loads(final)
    statBotics = requests.get(f"https://api.statbotics.io/v2/team/{team_num}").json
    gsheet = requests.get(f'https://xyz.com?team={team_num}')
    final.append(statBotics)
    for x in gsheet['Logs']:
        temp = {
            "Match": x['match'],
            "Outcome": x['outcome'],
            "Score": x['score']
        }
    return {"item_id": item_id}