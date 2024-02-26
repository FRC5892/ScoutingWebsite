const apiData = {
    "number": 1,
    "alliances": {
        "red": {
            "teams": [
                {
                    "number": 5892,
                    "name": "Energy HEROs",
                    "leftStartingZone": true,
                    "auton_ampNotes": 1,
                    "auton_speakerNotes": 2,
                    "teleop_ampNotes": 4,
                    "teleop_speakerNotes": 3,
                    "teleop_ampedSpeakerNotes": 7,
                    "park": true,
                    "onstage": true,
                    "spotlit": true,
                    "harmony": true,
                    "trap": 2,
                    "EPA": 70
                },
                {
                    "number": 5414,
                    "name": "Pearadox",
                    "leftStartingZone": true,
                    "auton_ampNotes": 1,
                    "auton_speakerNotes": 1,
                    "teleop_ampNotes": 3,
                    "teleop_speakerNotes": 2,
                    "teleop_ampedSpeakerNotes": 5,
                    "park": true,
                    "onstage": true,
                    "spotlit": false,
                    "harmony": false,
                    "trap": 1,
                    "EPA": 55.2
                },
                {
                    "number": 3847,
                    "name": "Spectrum",
                    "leftStartingZone": true,
                    "auton_ampNotes": 0,
                    "auton_speakerNotes": 1,
                    "teleop_ampNotes": 5,
                    "teleop_speakerNotes": 5,
                    "teleop_ampedSpeakerNotes": 2,
                    "park": true,
                    "onstage": true,
                    "spotlit": false,
                    "harmony": true,
                    "trap": 1,
                    "EPA": 43.2
                }
            ]
        },
        "blue": {
            "teams": [
                {
                    "number": 99998,
                    "name": "Demo Team 1",
                    "leftStartingZone": false,
                    "auton_ampNotes": 0,
                    "auton_speakerNotes": 0,
                    "teleop_ampNotes": 0,
                    "teleop_speakerNotes": 0,
                    "teleop_ampedSpeakerNotes": 0,
                    "park": false,
                    "onstage": false,
                    "spotlit": false,
                    "harmony": false,
                    "trap": 0,
                    "EPA": 0
                },
                {
                    "number": 118,
                    "name": "Robonauts",
                    "leftStartingZone": true,
                    "auton_ampNotes": 1,
                    "auton_speakerNotes": 3,
                    "teleop_ampNotes": 2,
                    "teleop_speakerNotes": 1,
                    "teleop_ampedSpeakerNotes": 6,
                    "park": true,
                    "onstage": true,
                    "spotlit": false,
                    "harmony": false,
                    "trap": 2,
                    "EPA": 55.2
                },
                {
                    "number": 99999,
                    "name": "Demo Team 2",
                    "leftStartingZone": false,
                    "auton_ampNotes": 0,
                    "auton_speakerNotes": 0,
                    "teleop_ampNotes": 0,
                    "teleop_speakerNotes": 0,
                    "teleop_ampedSpeakerNotes": 0,
                    "park": false,
                    "onstage": false,
                    "spotlit": false,
                    "harmony": false,
                    "trap": 0,
                    "EPA": 0
                }
            ]
        }
    }
}

class TeamPoints {
    constructor(pointsData) {
        this.pointsData = pointsData
        this.name = pointsData.name
        this.number = pointsData.number
    }

    getTotalPoints(type) {
        switch (type) {
            case "all":
                return this.getTotalPoints("auton") + this.getTotalPoints("teleop") + this.getStagePoints("all") + this.getMiscellaneousPoints("all")
            case "auton":
                return this.getSpeakerPoints("auton") + this.getAmpPoints("auton")
            case "teleop":
                return this.getSpeakerPoints("teleop") + this.getAmpPoints("teleop")
        }
    }

    getSpeakerPoints(type) {
        switch (type) {
            case "all":
                return this.getSpeakerPoints("auton") + this.getSpeakerPoints("unamped") + this.getSpeakerPoints("amped")
            case "auton":
                return this.pointsData.auton_speakerNotes * 5
            case "teleop":
                return this.getSpeakerPoints("unamped") + this.getSpeakerPoints("amped")
            case "unamped":
                return this.pointsData.teleop_speakerNotes * 2
            case "amped":
                return this.pointsData.teleop_ampedSpeakerNotes * 5
        }
    }

    getAmpPoints(type) {
        switch (type) {
            case "all":
                return this.getAmpPoints("auton") + this.getAmpPoints("teleop")
            case "auton":
                return this.pointsData.auton_ampNotes * 2
            case "teleop":
                return this.pointsData.teleop_ampNotes * 1
        }
    }

    getStagePoints(type) {
        switch (type) {
            case "all":
                return this.getStagePoints("park") + this.getStagePoints("onstage") + this.getStagePoints("trap") + this.getStagePoints("harmony")
            case "park":
                if (this.pointsData.park) {
                    return 1} else {return 0}
            case "onstage":
                if (this.pointsData.onstage) {
                    if (this.pointsData.spotlit) {
                        return 4} else {return 3}
                } else {return 0}
            case "harmony":
                if (this.pointsData.harmony) {
                    return 2} else {return 0}
            case "trap":
                return this.pointsData.trap * 5
        }
    }

    getMiscellaneousPoints(type) {
        switch (type) {
            case "all":
                return this.getMiscellaneousPoints("leave")
            case "leave":
                if (this.pointsData.leftStartingZone) {
                    return 1} else {return 0}
        }
    }
}

allianceLoop("red")
allianceLoop("blue")

function allianceLoop(color) {
    let totalPoints = 0
    for (let teamIndex in apiData.alliances[color].teams) {
        let teamData = apiData.alliances[color].teams[teamIndex]
        let pointsHTML = ``
        let points = new TeamPoints(teamData)
        totalPoints += points.getTotalPoints("all")
        class PointGroup{
            constructor(data) {
                this.title = data.title
                this.data = data.data
            }
    
            HTML() {
                let HTMLString = `<p class="sectionTitle">${this.title}</p><div class="sectionLine"></div>`
                for (let index in this.data) {
                    if (typeof this.data[index][0] != "string") {
                        HTMLString += `
                            <div>
                                <h6>${this.data[index][0][0]} <span class="subtext">${this.data[index][0][1]}</span></h6>
                                <div>
                                    <h5 class="pointValue">${this.data[index][1]}</h5>
                                </div>
                            </div>
                        `
                    } else {
                        HTMLString += `
                            <div>
                                <h6>${this.data[index][0]}</h6>
                                <div>
                                    <h5 class="pointValue">${this.data[index][1]}</h5>
                                </div>
                            </div>
                        `
                    }
                }
                return HTMLString
            }
        }
        let pointGroups = [
            {
                "title": "EPA",
                "data": [
                    ["EPA", teamData.EPA]
                ]
            },
            {
                "title": "Speaker",
                "data": [
                    ["Total", points.getSpeakerPoints("all")],
                    ["Auton", points.getSpeakerPoints("auton")],
                    [["Teleop", "unamped notes only"], points.getSpeakerPoints("unamped")],
                    ["Amped", points.getSpeakerPoints("amped")]
                ]
            },
            {
                "title": "Amp",
                "data": [
                    ["Total", points.getAmpPoints("all")],
                    ["Auton", points.getAmpPoints("auton")],
                    ["Teleop", points.getAmpPoints("teleop")]
                ]
            },
            {
                "title": "Stage",
                "data": [
                    ["Total", points.getStagePoints("all")],
                    ["Park", points.getStagePoints("park")],
                    ["Onstage", points.getStagePoints("onstage")],
                    ["Harmony", points.getStagePoints("harmony")],
                    ["Trap", points.getStagePoints("trap")]
                ]
            },
            {
                "title": "Miscellaneous",
                "data": [
                    [["Leave", "during Auto"], points.getMiscellaneousPoints("leave")]
                ]
            }
        ]
        let pointGroupsHTML = ""
        for (let index in pointGroups) {
            pointGroupsHTML += new PointGroup(pointGroups[index]).HTML()
        }
        document.getElementById(`${color}AllianceContainer`).insertAdjacentHTML("beforeend", `
            <div class="teamContainer">
            <div class="teamNameContainer" id="red1Name">
                <h5>${teamData.number} <span class="teamName">${teamData.name}</span></h5>
            </div>
            <div class="teamPoints">
                <h2>${points.getTotalPoints("all")}<span class="pointsLabel"> points</span></h2>
            </div>
            <div class="pointsBreakdown">
                ${pointGroupsHTML}
            </div>
        `)
        if (Number(teamIndex)+1 < apiData.alliances.red.teams.length) {
            document.getElementById(`${color}AllianceContainer`).insertAdjacentHTML("beforeend", `
                <div class="divider"></div>
            `)
        }
    }
    document.getElementById(`${color}AllianceScore`).innerText = totalPoints
}