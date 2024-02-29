import random
import time
import requests
from fastapi import FastAPI
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/robot/{event}/{team_num}")
def read_item(event: str, team_num: int):
    final = '{ "Matches": [], "statBotYear": [], "statBotEvent": [], "statBoticsMatches": {} }'
    final = json.loads(final)
    statBoticsYear = requests.get(f"https://api.statbotics.io/v2/team_year/{team_num}/2024")
    statBoticsEvent = requests.get(f"https://api.statbotics.io/v2/team_event/{team_num}/{event}")
    final['statBoticsMatches'] = requests.get(f"https://api.statbotics.io/v2/matches/team/{team_num}/event/{event}")
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
                    "Match": random.randint(0,56),
                    "Notes": x[20],
                    "Charge Station": x[21],
                    "Score": x[24]
                }
                final['Matches'].append(temp)
        except Exception as E:
            pass
    return final

def yOrN(thing):
    if thing == "yes":
        return True
    return False

@app.get("/match/{event}/{match_num}")
def read_item(event: str, match_num: int):
    matchKey = json.loads(requests.get(f'https://api.statbotics.io/v2/matches/event/{event}').text)[match_num-1]['key']
    match = json.loads(requests.get(f'https://api.statbotics.io/v2/match/{matchKey}').text)
    headers = {
        'Content-Type': 'application/json'
    }
    gsheet = requests.get(
        'https://script.google.com/macros/s/AKfycbxJJ3WN8W1hT0r3HELKaNagYv8l8YrhKAaiP3PxEP7v_VIGJcFlQtI2xl1EfowhrJdB/exec',
        allow_redirects=True, headers=headers).content.decode('utf-8')
    gjson = json.loads(gsheet)
    jzon = json.loads(open('final.json', 'r').read())
    redTeams = [match['red_1'], match['red_2'], match['red_3']]
    blueTeams = [match['blue_1'], match['blue_2'], match['blue_3']]
    for team in redTeams:
        red1 = 1
        for x in range(len(gjson)):
            if gjson[x][0] == team and gjson[x][1] == match_num:
                red1 = x
                break
        jzon['number'] = match_num
        print(gjson[red1])
        print(red1)
        tempzon = {
            "number": team,
            "EPA": match['red_epa_sum'],
            "leftStartingZone": gjson[red1][3],
            "auton_ampNotes": gjson[red1][4],
            "auton_speakerNotes": gjson[red1][5],
            "teleop_ampNotes": gjson[red1][7],
            "teleop_speakerNotes": gjson[red1][9],
            "teleop_ampedSpeakerNotes": gjson[red1][8],
            "park": yOrN(gjson[red1][10]),
            "onstage": yOrN(gjson[red1][11]),
            "spotlit": yOrN(gjson[red1][13]),
            "harmony": yOrN(gjson[red1][14]),
            "trap": yOrN(gjson[red1][12]),
        }
        jzon['alliances']['red']['teams'].append(tempzon)
    for team in blueTeams:
        red1 = 1
        for d in range(len(gjson)):
            if gjson[d][0] == team and gjson[d][1] == match_num:
                red1 = d
                break
        jzon['number'] = match_num
        print(gjson[red1])
        print(red1)
        tempzon = {
            "number": team,
            "EPA": match['blue_epa_sum'],
            "leftStartingZone": gjson[red1][3],
            "auton_ampNotes": gjson[red1][4],
            "auton_speakerNotes": gjson[red1][5],
            "teleop_ampNotes": gjson[red1][7],
            "teleop_speakerNotes": gjson[red1][9],
            "teleop_ampedSpeakerNotes": gjson[red1][8],
            "park": yOrN(gjson[red1][10]),
            "onstage": yOrN(gjson[red1][11]),
            "spotlit": yOrN(gjson[red1][13]),
            "harmony": yOrN(gjson[red1][14]),
            "trap": yOrN(gjson[red1][12]),
        }
        jzon['alliances']['blue']['teams'].append(tempzon)
    return jzon
