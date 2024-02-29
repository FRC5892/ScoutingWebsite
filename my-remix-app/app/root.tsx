import type { LinksFunction } from "@remix-run/node";

import {
    Outlet,
    Meta,
    Links
} from "@remix-run/react";

import appStylesHref1 from "./event.css";
import appStylesHref2 from "./index.css";
import appStylesHref3 from "./match.css";
import appStylesHref4 from "./style.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref1 },
    { rel: "stylesheet", href: appStylesHref2 },
    { rel: "stylesheet", href: appStylesHref3 },
    { rel: "stylesheet", href: appStylesHref4 },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Urbanist&display=swap" },
];

export default function App() {

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <Meta />
                <Links />
            </head>
            <Outlet />
        </html>
    );
}
