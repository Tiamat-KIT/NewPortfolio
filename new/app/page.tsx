import Image from "next/image";
import "./globals.css"
import BreadCrumbs from "@/stories/BreadCrumbs/BreadCrumbs";
import Link from "next/link";
export default function Home() {
  const NowTime = new Date();
  return (
    <main>
        <BreadCrumbs Path={[{PathName:"Home",PathRoute:"/"}]}/>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">泡沫のポートフォリオサイト</h2>
            こんにちは！<span className="text-blue-500 font-bold">泡沫</span>といいます！<br />
            大学{NowTime.getFullYear() - 2021}年生です！<br />
            {NowTime.getFullYear() - 2021 ==  3 ?  <div>今年になって<Link href={"/research"}>研究</Link>が始まりました！</div> : ""}
            {(NowTime.getFullYear() == 3 && NowTime.getMonth() == 8) ?  <div>研究も大詰めとなりました！</div> : ""}
            このサイトは、私のポートフォリオサイトです。<br />
            このサイトでは、私がこれまで作ったものだったり、大学生として普段何をしているか<br />
            などを掲載しています！<br />
          </div> 
        </div>
    </main>
  );
}
