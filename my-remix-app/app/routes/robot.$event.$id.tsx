import type { LinksFunction } from "@remix-run/node";
import appStylesHref4 from ".././style.css";
import appStylesHref1 from ".././event.css";

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
                    <h3 className="pageTitle">Event 1</h3>
                    <section className="matchList">
                        <h5>Qualifying Matches</h5>
                        <div className="matchSection">
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
                        <h5>Bracket Matches</h5>
                        <div className="matchSection">
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
                    </section>
                </main>
            </body>
        </html>
    );
}