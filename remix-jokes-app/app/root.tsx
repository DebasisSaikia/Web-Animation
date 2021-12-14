import { LiveReload, Outlet, Links } from "remix"
import type { LinksFunction } from "remix";
import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)"
    }
  ];
};

export default function App(){
  return(
    <html>
      <head>
        <meta content="text/html;charset=UTF-8" />
        <title>Remix App</title>
        <Links/>
      </head>
      <body>
        
        <Outlet/>
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  )
}