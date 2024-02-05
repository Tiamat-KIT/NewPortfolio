import BreadCrumbs from "@/stories/BreadCrumbs/BreadCrumbs";
import Link from "next/link";

export default function Research() {
    return (
        <main>
            <BreadCrumbs Path={[{PathName:"Home",PathRoute:"/"},{PathName: "Research",PathRoute: "/research"}]}/>
            <h1 className="text-xl">研究</h1>
            <div>現在は、大学で研究を行っています。</div>
            <div>
                研究内容は、
                    <span className="text-blue-500 font-bold">「WebAssemblyによるWebARの動作高速化」</span>
                です。
            </div>
            <div>
                WebAssemblyとは、Webブラウザ上で動作するプログラムを高速に動作させるための技術です。<br />
                詳細については、<Link href="https://developer.mozilla.org/ja/docs/WebAssembly" target="_blank" rel="noopener noreferrer">MDN Web Docs</Link>をご覧ください。
            </div>
        </main>
    )
}