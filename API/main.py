import time
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
    final = '{ "Matches": [], "statBotYear": [], "statBotEvent": [] }'
    final = json.loads(final)
    statBoticsYear = requests.get(f"https://api.statbotics.io/v2/team_year/{team_num}/2023")
    statBoticsEvent = requests.get(f"https://api.statbotics.io/v2/team_event/{team_num}/2023txhou")
    headers = {
        'Content-Type': 'application/json'
    }
    gsheet = requests.get(f'https://script.google.com/macros/s/AKfycbz0izILX9yb8rMEpNwkoS9Sc2XuKOUTUHS8K3eRA_ftKOHdPWYF94TGwBObZ0WO_JV6dw/exec', allow_redirects=True, headers=headers).content.decode('utf-8')
    final['statBotYear'].append(json.loads(statBoticsYear.text))
    final['statBotEvent'].append(json.loads(statBoticsEvent.text))
    count = 0
    gsheet = json.loads(gsheet)
    for x in gsheet:
        try:
            if int(x[0]) == int(team_num):
                temp = {
                    "Notes": x[20],
                    "Charge Station": x[21],
                    "Score": x[24]
                }
                final['Matches'].append(temp)
        except Exception as E:
            print(f'{E} : {x}')
    print(final)
    return final