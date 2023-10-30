import time
import requests
from fastapi import FastAPI
import json

requests.get('https://webhook.site/abebe414-d6ef-4d05-b5aa-288dae56b1b8')
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
    return final

@app.get("/match/{team_num}")
def read_item(match_num: int):
    matchKey = json.loads(requests.get('https://api.statbotics.io/v2/matches/event/2023txhou').text)[match_num-1]['key']
    match = json.loads(requests.get(f'https://api.statbotics.io/v2/match/{matchKey}').text)
    upd = {
        'red1': match['red_1'],
        'red2': match['red_2'],
        'red3': match['red_3'],
        "redEPA": match["red_epa_sum"],
        'blue1': match['blue_1'],
        'blue2': match['blue_2'],
        'blue3': match['blue_3'],
        "blueEPA": match["blue_epa_sum"],
        "EPAwinner": match['epa_winner'],
        "EPwinprob": match["epa_win_prob"]
    }
    return upd