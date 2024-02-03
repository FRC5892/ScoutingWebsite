import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import {
  Outlet,
} from "@remix-run/react";

import appStylesHref from "./app.css";
import appStylesHref1 from "./event.css";
import appStylesHref2 from "./index.css";
import appStylesHref3 from "./match.css";
import appStylesHref4 from "./style.css";


import { getContacts } from "./data";

export const loader = async () => {
    const contacts = await getContacts();
    return json({ contacts });
};

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
    { rel: "stylesheet", href: appStylesHref1 },
    { rel: "stylesheet", href: appStylesHref2 },
    { rel: "stylesheet", href: appStylesHref3 },
    { rel: "stylesheet", href: appStylesHref4 },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Urbanist&display=swap" },
];

export default function App() {
  return (
    <Outlet />
  );
}
