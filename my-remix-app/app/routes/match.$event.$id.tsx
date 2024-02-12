import { searchFunction } from "app/search"
import { Scripts } from "@remix-run/react";
import { fetchData } from "app/fetchMatch"

export default function Match() {
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
                <h3 className="pageTitle" id="pageTitle">Match 1</h3>
                <section className="mainMatchResultsSection">
                    <div className="roundedBox redAlliance">
                        <div className="allianceScore">
                            <h1 id="redAllianceScore">172</h1>
                        </div>
                        <div className="allianceMembers">
                            <div className="teamContainer">
                                <div className="teamNameContainer" id="red1Name">
                                    <h5>5892 <span className="teamName">Energy HEROs</span></h5>
                                </div>
                                <div className="teamPoints" id="red1Points">
                                    <h2>108<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <div id="red1PointsSpeaker">
                                            <h5 className="pointValue">12 | 50 <span className="pointValueSubtext">amp</span></h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <div id="red1PointsAmp">
                                            <h5 className="pointValue">10</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <div id="red1PointsTrap">
                                            <h5 className="pointValue">5</h5>
                                        </div>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <div id="red1PointsStage">
                                            <h5 className="pointValue">3</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teamContainer">
                                <div className="teamNameContainer" id="red2Name">
                                    <h5>5892 <span className="teamName">Energy HEROs</span></h5>
                                </div>
                                <div className="teamPoints" id="red2Points">
                                    <h2>108<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <div id="red2PointsSpeaker">
                                            <h5 className="pointValue">12 | 50 <span className="pointValueSubtext">amp</span></h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <div id="red2PointsAmp">
                                            <h5 className="pointValue">10</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <div id="red2PointsTrap">
                                            <h5 className="pointValue">5</h5>
                                        </div>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <div id="red2PointsStage">
                                            <h5 className="pointValue">3</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teamContainer">
                                <div className="teamNameContainer" id="red3Name">
                                    <h5>5892 <span className="teamName">Energy HEROs</span></h5>
                                </div>
                                <div className="teamPoints" id="red3Points">
                                    <h2>108<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <div id="red3PointsSpeaker">
                                            <h5 className="pointValue">12 | 50 <span className="pointValueSubtext">amp</span></h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <div id="red3PointsAmp">
                                            <h5 className="pointValue">10</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <div id="red3PointsTrap">
                                            <h5 className="pointValue">5</h5>
                                        </div>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <div id="red3PointsStage">
                                            <h5 className="pointValue">3</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roundedBox blueAlliance">
                        <div className="allianceScore">
                            <h1>98</h1>
                        </div>
                        <div className="allianceMembers">
                            <div className="teamContainer">
                                <div className="teamNameContainer" id="blue1Name">
                                    <h5>5892 <span className="teamName">Energy HEROs</span></h5>
                                </div>
                                <div className="teamPoints" id="blue1Points">
                                    <h2>108<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <div id="blue1PointsSpeaker">
                                            <h5 className="pointValue">12 | 50 <span className="pointValueSubtext">amp</span></h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <div id="blue1PointsAmp">
                                            <h5 className="pointValue">10</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <div id="blue1PointsTrap">
                                            <h5 className="pointValue">5</h5>
                                        </div>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <div id="blue1PointsStage">
                                            <h5 className="pointValue">3</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teamContainer">
                                <div className="teamNameContainer" id="blue2Name">
                                    <h5>5892 <span className="teamName">Energy HEROs</span></h5>
                                </div>
                                <div className="teamPoints" id="blue2Points">
                                    <h2>108<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <div id="blue2PointsSpeaker">
                                            <h5 className="pointValue">12 | 50 <span className="pointValueSubtext">amp</span></h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <div id="blue2PointsAmp">
                                            <h5 className="pointValue">10</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <div id="blue2PointsTrap">
                                            <h5 className="pointValue">5</h5>
                                        </div>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <div id="blue2PointsStage">
                                            <h5 className="pointValue">3</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teamContainer">
                                <div className="teamNameContainer" id="blue3Name">
                                    <h5>5892 <span className="teamName">Energy HEROs</span></h5>
                                </div>
                                <div className="teamPoints" id="blue3Points">
                                    <h2>108<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <div id="blue3PointsSpeaker">
                                            <h5 className="pointValue">12 | 50 <span className="pointValueSubtext">amp</span></h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <div id="blue3PointsAmp">
                                            <h5 className="pointValue">10</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <div id="blue3PointsTrap">
                                            <h5 className="pointValue">5</h5>
                                        </div>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <div id="blue3PointsStage">
                                            <h5 className="pointValue">3</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
}