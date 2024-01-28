import Image from "next/image";
import "./globals.css"
import BreadCrumbs from "@/stories/BreadCrumbs";
export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-[0.5px]">
        <BreadCrumbs Path={[{PathName:"Home",PathRoute:"/"}]}/>
      </div>
    </main>
  );
}
