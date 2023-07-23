import { Tooltip } from "react-tooltip"

import './../app/globals.css'
import Link from "next/link"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="width-full bg-green-700 p-3">
        <Link href="/">
          <h1 className="text-white font-bold">
            <span className="text-lg leading-tight">Foreign ¢urrency<br /></span>
            <span className="text-3xl">$avings</span>
          </h1>
        </Link>
      </div>
      {children}
      <Tooltip id="tooltip"></Tooltip>
      <div className="width-full bg-green-700 p-4 text-white fixed bottom-0">
        Site operated by Caffeine Software Ltd, a company registered in England (no. 13992145) at Unit 24, Highcroft Industrial Estate, Enterprise Road, Horndean, Waterlooville, PO8 0BT, United Kingdom. Got any questions or feedback or spotted an error? Email <a href="mailto:me@timrogers.co.uk" className="underline">me@timrogers.co.uk</a>. Registered with the Information Commissioner&apos;s Office (no. C1121380).
      </div>
    </>
  )
}