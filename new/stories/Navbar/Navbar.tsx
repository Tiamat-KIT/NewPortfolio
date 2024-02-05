import { useState, useLayoutEffect, Suspense } from "react";
import "../../app/globals.css"
import ContactForm from "../ContactForm/ContactForm";
import Modal from "../Modal/Modal";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import RssAlertBell from "../RssAlertBell/RssAlertBell";
import { RSS } from "@/type/RSS";
// import SendEmail from "@/public/MingcuteMailSendLine.svg"

export default async function Navbar(){
    const ZennRSSFeed = await (await fetch(`${process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL : /* "http://localhost:3000" */ "http://127.0.0.1:3000"}/api/zenn-posts`)).json() as RSS[]
    return (
        <nav className="navbar bg-gradient-to-r from-base-200 from-10% via-base-100 via-30% to-base-300 to-90%  border-b-2 border-black" style={{borderRadius: "0% 0% 40% 40%"}}>
            <div className="navbar-start">
                <details className="dropdown">
                <summary className="m-1 btn-circle btn btn-ghost no-animation">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                        <Link href={"/research"}>研究内容について</Link>
                    </li>
                </ul>
                </details>
            </div>
            <div className="navbar-center">
                <h1 className="text-2xl font-extrabold ">泡沫のポートフォリオサイト</h1>
            </div>
            <div className="navbar-end">
                {/* <Modal modal_id="contact" backdrop={true} button={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20 4a2 2 0 0 1 1.995 1.85L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18v-1h2v1h16V7.414l-6.94 6.94a1.5 1.5 0 0 1-2.007.103l-.114-.103L4 7.414V8H2V6a2 2 0 0 1 1.85-1.995L4 4zM6 13a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm12.586-7H5.414L12 12.586zM5 10a1 1 0 0 1 .117 1.993L5 12H2a1 1 0 0 1-.117-1.993L2 10z"/></g></svg>} responsive={true}>
                    <ContactForm />
                </Modal> */}
                <Suspense fallback={<div>loading...</div>}>
                    <RssAlertBell  ZennRSS={ZennRSSFeed}/>
                </Suspense>
               <ThemeToggler />
            </div>
        </nav>
    )
}

