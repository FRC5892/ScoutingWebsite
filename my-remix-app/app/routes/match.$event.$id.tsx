import type { LinksFunction } from "@remix-run/node";
import appStylesHref4 from ".././style.css";
import appStylesHref1 from ".././match.css";

import {
    Links,
    Meta,
} from "@remix-run/react";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref1 },
    { rel: "stylesheet", href: appStylesHref4 },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Urbanist&display=swap" },
];

export default function Robot() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Meta />
                <Links />
            </head>

            <body>
                <header>
                    <div>
                        <h3>5892 Scouting Data</h3>
                        <div className="headerPush">
                            <div className="search">
                                <h4>Search</h4>
                                <input id="search"></input>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <h3 className="pageTitle">Match 1</h3>
                    <section className="mainMatchResultsSection">
                        <div className="roundedBox redAlliance">
                            <div className="allianceScore">
                                <h1>172</h1>
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
        </html>
    );
}