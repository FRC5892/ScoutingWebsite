import { Scripts } from "@remix-run/react";
import { fetchData } from "app/searchMatch"
import { searchFunction } from "app/search"

export default function Match() {
    return (
        <body>
            <Scripts/>
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
                            <h1 id="redAllianceScore"></h1>
                        </div>
                        <div className="allianceMembers" id="redAllianceContainer">

                        </div>
                    </div>
                    <div className="roundedBox blueAlliance">
                        <div className="allianceScore">
                            <h1 id="blueAllianceScore"></h1>
                        </div>
                        <div className="allianceMembers" id="blueAllianceContainer">

                        </div>
                    </div>
                </section>
            </main>
            <script
                async
                src={`https://unpainful-programme.000webhostapp.com/searchMatch.js`}
            />
        </body>
    );
}