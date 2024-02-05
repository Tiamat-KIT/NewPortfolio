import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/stories/Navbar/Navbar";
import Footer from "@/stories/Footer/Footer";
import { BlogType,getList,getReportLatest,getReportDetail } from "@/libs/microcms";
import PagenateBlog from "@/stories/PagenateBlog/PagenateBlog";
import parse from 'html-react-parser'
import Container from "@/stories/Container/Container";
import Card from "@/stories/Card/Card";
import { RSS } from "@/type/RSS";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NODE_ENV === "production" ? {
    template: `泡沫Portfolio`,
    default: "Home | 泡沫Portfolio",
  } : `Developing`,
  description: process.env.NODE_ENV === "production" ? "泡沫京水（本名とは別）のポートフォリオサイトです。研究の進捗とか一週間のうちに何をしているかを雑多に書いています。" : "開発中",
  authors: {name: "泡沫京水",url: "https://twitter.com/CYUVi1336"},
  generator: "react, nextjs",
  creator: "泡沫京水",
  publisher: "泡沫京水",
  icons: process.env.NODE_ENV === "production" ? "./utakata.ico" : "./dev.svg"
};

export default async function RootLayout({
  children,
  DevContent,
}: Readonly<{
  children: React.ReactNode;
  DevContent: React.ReactNode;
}>) {

  const { contents } = await getList();
  const LatestReport = await getReportLatest();
  const LatestReportDetail = await getReportDetail(LatestReport.id);

  const BlogList = () => {
    const result = []
    for(let i = 0; i < contents.length; i += 5){
      result.push(contents.slice(i,i+3));
    }
    return result as BlogType[][];
  };
  type WeekType = {
    name: string,
    description: string
  }
  const WeekList:WeekType[] = [
      {
          name: "Monday",
          description: "先週まで研究進捗から予定立て"
      },
      {
          name: "Tuesday",
          description: "学内の課外活動PJの活動日"
      },
      {
          name: "Wednesday",
          description: "研究"
      },
      {
          name: "Thursday",
          description: "研究"
      },
      {
          name: "Friday",
          description: "研究"
      },
      {
          name: "Saturday",
          description: "今週の研究進捗をまとめる"
      },
      {
          name: "Sunday",
          description: "家のことだけやる曜日"
      }
  ]
  return (
    <html lang="ja">
      <body className={inter.className}>
          <Navbar />
          <Container>
          <div className="flex">
            <div className="basis-8/12">
              <div className="container mx-auto px-[0.5px]">
                {children}
              </div>
              <Container size="sm">
                <div className="py-6">
                  <Card 
                    title={`最新の研究レポート -${LatestReport.title}-`} 
                    description={parse(LatestReportDetail.body)} 
                    Button={<button className="badge badge-outline">{LatestReportDetail.tag}</button>}
                    optionClass="shadow-xl bg-base-100"/>
                  </div>
                <div className="grid grid-cols-1 gap-4">
                  <span>
                    {DevContent}
                  </span>
                </div>
                
              </Container>
            </div>
            <div className="divider divider-horizontal" />
              <aside className="basis-4/12 pt-5">
                  <div className="bg-base-100 shadow-lg rounded-lg p-3">
                    <h3 className="hero">ブログ</h3>
                    <PagenateBlog Blog={BlogList()}/>
                  </div>
                  
                <div className="overflow-x-auto card bg-base-100 shadow-lg my-6">
                  <div className="card-body">
                    <h3 className="card-title">最近の泡沫の一週間</h3>
                    <table className="table ">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Day Of Week</th>
                            <th>description</th>
                        </tr>
                        </thead>
                        <tbody>
                            {WeekList.map((Week,idx) => {
                                return (
                                    <tr className="hover" key={idx}>
                                        <td>{Week.name}</td>
                                        <td>{Week.description}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
          <Footer />
      </body>
    </html>
  );
}
