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
    statBoticsYear = requests.get(f"https://api.statbotics.io/v2/team_year/{team_num}/2024").json
    statBoticsEvent = requests.get(f"https://api.statbotics.io/v2/team_event/{team_num}/2023txhou")
    # gsheet = requests.get(f'https://xyz.com?team={team_num}')
    final['statBotYear'].update(statBoticsYear)
    final['statBotEvent'].update(statBoticsEvent)
    # for x in gsheet['Logs']:
    #     temp = {
    #         "Match": x['match'],
    #         "Outcome": x['outcome'],
    #         "Score": x['score']
    #     }
    #     final['Matches'].update(temp)
    return final