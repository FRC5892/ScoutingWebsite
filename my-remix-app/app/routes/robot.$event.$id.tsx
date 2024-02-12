import { Scripts } from "@remix-run/react";
import { searchFunction } from "app/search"

export default function Robot() {

    return (
        <body>
            <Scripts />
            <header>
                <div>
                    <h3>5892 Scouting Data</h3>
                    <div className="headerPush">
                        <div className="search">
                            <h4>Search</h4>
                            <input id="searchBox"></input>
                            <button
                                id="searchButton"
                                onClick={searchFunction}
                            >
                                Got
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <h3 className="pageTitle">Event 1</h3>
                <section className="matchList">


                    <div id="qualifyingMatchesSection">
                        <h5>Qualifying Matches</h5>
                        <div id="qualifyingMatchesContent" className="matchSection">
                            <div className="matchContainer roundedBox">
                                <h3>Match 1</h3>
                                <div className="matchSummary">
                                    <h6 className="teamRedText">9999</h6>
                                    <h6 className="teamRedText">9999</h6>
                                    <h6 className="teamRedText">9999</h6>
                                    <h4 className="teamRedText">119</h4>
                                    <h4>-</h4>
                                    <h4 className="teamBlueText">63</h4>
                                    <h6 className="teamBlueText">9999</h6>
                                    <h6 className="teamBlueText">9999</h6>
                                    <h6 className="teamBlueText">9999</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="bracketMatchesSection">
                        <h5>Bracket Matches</h5>
                        <div id="bracketMatchesContent" className="matchSection">
                            <div className="matchContainer roundedBox" id="MatchTemplate">
                                <h3>Match 1</h3>
                                <div className="matchSummary">
                                    <h6 className="teamRedText">9999</h6>
                                    <h6 className="teamRedText">9999</h6>
                                    <h6 className="teamRedText">9999</h6>
                                    <h4 className="teamRedText">119</h4>
                                    <h4>-</h4>
                                    <h4 className="teamBlueText">63</h4>
                                    <h6 className="teamBlueText">9999</h6>
                                    <h6 className="teamBlueText">9999</h6>
                                    <h6 className="teamBlueText">9999</h6>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
            </main>
        </body>
    );
}