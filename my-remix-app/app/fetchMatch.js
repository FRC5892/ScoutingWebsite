async function getData(team) {
    const response = await fetch(new Request("https://energyheros-scouting-1ef4705d47e4.herokuapp.com/robot/" + team));
    const teamData = await response.json();
    return teamData
}

export function fetchData() {
    str = window.location.href.split("/");
    team = str[str.length - 1]
    getData(team)

}