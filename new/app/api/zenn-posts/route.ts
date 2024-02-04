import Parser from "rss-parser"
import { NextResponse,NextRequest } from "next/server"
import { RSS } from "@/type/RSS"
import parse from "html-react-parser"
 
async function fetchRSS(
    req: NextRequest,
) {
    const RSSResponse = await new Parser().parseURL("https://zenn.dev/ayaextech_fill/feed")
    return NextResponse.json(RSSResponse.items.map((item) => {
        return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            content: parse(item.content as string),
            creator: item.creator,
        } as RSS
    }) )
}

export {fetchRSS as GET}