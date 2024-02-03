async function getData(event, match) {
    const response = await fetch(new Request("https://energyheros-scouting-1ef4705d47e4.herokuapp.com/match/" + event + "/" + match));
    const teamData = await response.json();
    return teamData
}

export function fetchData() {
    const str = window.location.href.split("/");
    const match = str[str.length - 1]
    const event = str[str.length - 2]
    const teamData = getData(event, match)
    document.getElementById("pageTitle").value = "Match " + match

}