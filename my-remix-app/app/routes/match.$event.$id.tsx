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
                            <h1>172</h1>
                        </div>
                        <div className="allianceMembers">
                            <div className="teamContainer">
                                <div className="teamNameContainer" id="blueOneName">
                                    <h5>5892 <span className="teamName">Energy HEROs</span></h5>
                                </div>
                                <div className="teamPoints">
                                    <h2>108<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <h5 className="pointValue">12 | 50 <span className="pointValueSubtext">amp</span></h5>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <h5 className="pointValue">10</h5>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <h5 className="pointValue">5</h5>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <h5 className="pointValue">3</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teamContainer">
                                <div className="teamNameContainer">
                                    <h5>118 <span className="teamName">Robonauts</span></h5>
                                </div>
                                <div className="teamPoints">
                                    <h2>64<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <h5 className="pointValue">8 | 30 <span className="pointValueSubtext">amp</span></h5>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <h5 className="pointValue">10</h5>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <h5 className="pointValue">8</h5>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <h5 className="pointValue">3</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teamContainer">
                                <div className="teamNameContainer">
                                    <h5>9999 <span className="teamName">Off-Season Demo Team</span></h5>
                                </div>
                                <div className="teamPoints">
                                    <h2>0<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <h5 className="pointValue">0 | 0 <span className="pointValueSubtext">amp</span></h5>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <h5 className="pointValue">0</h5>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <h5 className="pointValue">0</h5>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <h5 className="pointValue">0</h5>
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
                                <div className="teamNameContainer">
                                    <h5>5892 <span className="teamName">Energy HEROs</span></h5>
                                </div>
                                <div className="teamPoints">
                                    <h2>108<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <h5 className="pointValue">12 | 50 <span className="pointValueSubtext">amp</span></h5>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <h5 className="pointValue">10</h5>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <h5 className="pointValue">5</h5>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <h5 className="pointValue">3</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teamContainer">
                                <div className="teamNameContainer">
                                    <h5>118 <span className="teamName">Robonauts</span></h5>
                                </div>
                                <div className="teamPoints">
                                    <h2>64<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <h5 className="pointValue">8 | 30 <span className="pointValueSubtext">amp</span></h5>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <h5 className="pointValue">10</h5>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <h5 className="pointValue">8</h5>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <h5 className="pointValue">3</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teamContainer">
                                <div className="teamNameContainer">
                                    <h5>9999 <span className="teamName">Off-Season Demo Team</span></h5>
                                </div>
                                <div className="teamPoints">
                                    <h2>0<span className="pointsLabel"> points</span></h2>
                                </div>
                                <div className="pointsBreakdown">
                                    <p className="sectionTitle">Notes</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Speaker</h6>
                                        <h5 className="pointValue">0 | 0 <span className="pointValueSubtext">amp</span></h5>
                                    </div>
                                    <div>
                                        <h6>Amp</h6>
                                        <h5 className="pointValue">0</h5>
                                    </div>
                                    <div>
                                        <h6>Trap</h6>
                                        <h5 className="pointValue">0</h5>
                                    </div>
                                    <p className="sectionTitle">Stage</p>
                                    <div className="sectionLine"></div>
                                    <div>
                                        <h6>Onstage</h6>
                                        <h5 className="pointValue">0</h5>
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