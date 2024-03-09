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

@app.get("/sorter")
def sorter():
    matches = []
    score = json.loads('{}')
    headers = {
        'Content-Type': 'application/json'
    }
    gsheet = requests.get(
        'https://script.google.com/macros/s/AKfycbxJJ3WN8W1hT0r3HELKaNagYv8l8YrhKAaiP3PxEP7v_VIGJcFlQtI2xl1EfowhrJdB/exec',
        allow_redirects=True, headers=headers).content.decode('utf-8')
    gsheet = json.loads(gsheet)
    for x in range(len(gsheet) -1):
        gsheet[x][0] = str(gsheet[x][0])
        try:
            int(gsheet[x][0])
            if f"{gsheet[x][0]}" in score:
                score[f"{gsheet[x][0]}"] = score[f"{gsheet[x][0]}"] + 1
            else:
                data = {
                    f"{gsheet[x][0]}": 1
                }
                score.update(data)

            found = False
            for e in range(len(matches)):
                if str(gsheet[x][0]) == str(matches[e][0]):
                    found = True
                    matches[e][2] = matches[e][2] + gsheet[x][6]
                    matches[e][3] = matches[e][3] + gsheet[x][16]
                    matches[e][4] = matches[e][4] + gsheet[x][15]
                    matches[e][5] = matches[e][5] + gsheet[x][17]
                    if yOrN(gsheet[x][14]) == True:
                        matches[e][6] = matches[e][6] + 1
                    matches[e][7] = matches[e][7] + gsheet[x][18]
                    break
            if not found:
                har = 0
                if yOrN(gsheet[x][14]) == True:
                    har = 1
                matches.append([f"{str(gsheet[x][0])}", 'test', gsheet[x][6], gsheet[x][16], gsheet[x][15], gsheet[x][17], har, gsheet[x][18]])
        except Exception as E:
            print(f"Error at lin 63: {E}")

    for match in range(len(matches)):
        print(match)
        numatches = matches[match][0]
        total = score[f'{numatches}']
        for item in range(len(matches[match])):
            if item != 1 and item != 0:
                matches[match][item] = round(matches[match][item] / total, 2)

    return matches

@app.get("/robot/{event}/{team_num}")
def read_item(event: str, team_num: int):
    matchKeys = json.loads(requests.get(f'https://api.statbotics.io/v2/matches/event/{event}').text)
    print(matchKeys)
    headers = {
        'Content-Type': 'application/json'
    }
    gsheet = requests.get(
        'https://script.google.com/macros/s/AKfycbxJJ3WN8W1hT0r3HELKaNagYv8l8YrhKAaiP3PxEP7v_VIGJcFlQtI2xl1EfowhrJdB/exec',
        allow_redirects=True, headers=headers).content.decode('utf-8')
    gjson = json.loads(gsheet)
    finalson = json.loads(open('robot.json', 'r').read())
    robotson = json.loads(requests.get(f'https://api.statbotics.io/v2/team_matches/team/{team_num}/event/{event}').text)
    matches = []
    for match in robotson:
        if match['status'] == 'Completed':
            matches.append(match['match'].replace('2024txbel_qm', ''))

    epas = json.loads(requests.get(f'https://api.statbotics.io/v2/team_event/{team_num}/{event}').text)
    finalson['epa'] = epas['epa_end']
    finalson['auton_epa'] = epas['auto_epa_end']
    finalson['teleop_epa'] = epas['teleop_epa_end']
    finalson['endgame_epa'] = epas['endgame_epa_end']

    for match_num in matches:
        roboBase = json.loads(open('robot.json', 'r').read())
        matchKey = matchKeys[match_num]['key']
        match = json.loads(requests.get(f'https://api.statbotics.io/v2/match/{matchKey}').text)
        redTeams = [match['red_1'], match['red_2'], match['red_3']]
        blueTeams = [match['blue_1'], match['blue_2'], match['blue_3']]
        for team in redTeams:
            red1 = 1
            for x in range(len(gjson)):
                if gjson[x][0] == team and gjson[x][1] == match_num:
                    red1 = x
                    break
            roboBase['number'] = match_num
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
            roboBase['alliances']['red']['teams'].append(tempzon)
        for team in blueTeams:
            red1 = 1
            for d in range(len(gjson)):
                if gjson[d][0] == team and gjson[d][1] == match_num:
                    red1 = d
                    break
            roboBase['number'] = match_num
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
            roboBase['alliances']['blue']['teams'].append(tempzon)
        finalson['matches'].append(roboBase)
    return finalson

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
