import { RSS } from "@/type/RSS"
import "../app/globals.css"
import {tv,type VariantProps} from "tailwind-variants"
import Link from "next/link"
import { UrlObject } from "url"

const RssAlertBellClass = tv({
    base: "",
    /*
        variants: { } ,
        defaultVariants: { },
    */
})

type RssAlertBellVariants = VariantProps<typeof RssAlertBellClass>

interface RssAlertBellProps extends RssAlertBellVariants {
    /* children?: React.ReactNode */
}

export default async function RssAlertBell(plop: RssAlertBellProps){
    const RssResponse = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : "http://localhost:3000"}/rss/alerts`)).json() as RSS[]
    console.log(RssResponse)
    return (
        <div className={ RssAlertBellClass(plop) }>
            {/* {plop.children} */}
            <details className="indicator dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <summary className="badge badge-xs badge-primary indicator-item btn btn-ghost"></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
{/*                     {RssResponse.map((rss, index) => {
                        return (
                            <li key={index}>
                                <Link href={rss.link as unknown as UrlObject} className="hover:bg-primary-100">{rss.title}</Link>
                            </li>
                        )
                    })} */}
                </ul>
            </details>
        </div>
    )
}