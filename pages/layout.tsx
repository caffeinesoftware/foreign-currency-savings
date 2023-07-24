import { Tooltip } from "react-tooltip";

import "./../app/globals.css";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="width-full bg-green-700 p-3">
        <Link href="/">
          <h1 className="text-white font-bold">
            <span className="text-lg leading-tight">
              Foreign ¢urrency
              <br />
            </span>
            <span className="text-3xl">$avings</span>
          </h1>
        </Link>
      </div>
      {children}
      <Tooltip
        id="tooltip"
        style={{ maxWidth: "300px", whiteSpace: "pre-wrap" }}
      ></Tooltip>
      <div className="w-full bg-green-700 p-4 text-white tall:fixed tall:bottom-0">
        Site operated by{" "}
        <a href="https://caffeinesoftware.com">Caffeine Software Ltd</a>, a
        company registered in England (no. 13992145). Got any questions or
        feedback or spotted an error? Email{" "}
        <a href="mailto:me@timrogers.co.uk" className="underline">
          me@timrogers.co.uk
        </a>
        .
      </div>
    </>
  );
}
