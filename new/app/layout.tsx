import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/stories/Navbar";
import Footer from "@/stories/Footer";
import { BlogType,getList,getReportLatest,getReportDetail } from "@/libs/microcms";
import PagenateBlog from "@/stories/PagenateBlog";
import parse from 'html-react-parser'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | 泡沫Portfolio",
    default: "Home | 泡沫Portfolio",
  },
  description: "泡沫京水（本名とは別）のポートフォリオサイトです。研究の進捗とか一週間のうちに何をしているかを雑多に書いています。",
  authors: {name: "泡沫京水",url: "https://twitter.com/CYUVi1336"},
  generator: "react, nextjs",
  creator: "泡沫京水",
  publisher: "泡沫京水",
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
  function SplitArray(array: BlogType[],n: number){
    const result = [];
    for(let i = 0; i < array.length; i += n){
      result.push(array.slice(i,i+n));
    }
    return result;
  }
  const DevContentList = SplitArray(contents,5);
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
      <head>
        <link rel="icon" href="/utakata.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="comtainer mx-auto px-6">
        <div className="flex">
          <div className="basis-8/12">
            <div className="container mx-auto px-[0.5px]">
              {children}
            </div>
            <div className="container mx-auto p-2">
              <div className="py-12">
                <div className="card shadow-xl bg-base-100">
                  <div className="card-body">
                    <h2 className="card-title">最新の研究レポート -{LatestReport.title}-</h2>
                    {parse(LatestReportDetail.body)}
                    <div className="justify-end card-actions">
                      <div>
                        <button className="badge badge-outline">{LatestReportDetail.tag}</button>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <span>
                  {DevContent}
                </span>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal" />
            <aside className="basis-4/12 pt-5">
                <div className="bg-white shadow-lg rounded-lg p-3">
                  <h3 className="hero">ブログ</h3>
                  <PagenateBlog Blog={DevContentList} />
                </div>
                
              <div className="overflow-x-auto card bg-base-100 shadow-lg mt-6">
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
        </div>
        <Footer />
      </body>
    </html>
  );
}
