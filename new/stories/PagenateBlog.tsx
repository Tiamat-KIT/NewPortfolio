"use client";
import { use, useEffect, useState } from "react";
import "../app/globals.css"
import { BlogType } from "@/libs/microcms";
export default function PagenateBlog({Blog}:{Blog: BlogType[][]}):JSX.Element{
    const [Pagenation,setPagenation] = useState<number>(0);
    const BlogList = Blog[Pagenation];
    const CountUp = () => {
        if(Pagenation < Blog.length - 1){
            setPagenation(Pagenation + 1);
        }
    }
    const CountDown = () => {
        if(Pagenation > 0){
            setPagenation(Pagenation - 1);
        }
    }
    return (
        <>
            {BlogList.map((content, idx) => {
                return(
                    <div className="border-gray-300 border-[0.3px] divide-2 rounded-lg shadow-xl basis-1 my-4" key={idx}>
                      <h4 className="text-md hero">{content.title}</h4>
                    </div>
                )
            })}
            <div className="container mx-auto px-16">
                <div className="join">
                    <button className="join-item btn btn-ghost" onClick={CountDown}>«</button>
                    <button className="join-item btn btn-ghost">Page {Pagenation + 1}</button>
                    <button className="join-item btn btn-ghost" onClick={CountUp}>»</button>
                </div>
            </div>
            
        </>
    )
}