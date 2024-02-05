import Card from "@/stories/Card/Card"

export default function Aside(){
    type DevContentType = {
        description: string,
        tag: string[]
    }
    const DevContentList: DevContentType[] = [
        {
            description: "ポートフォリオサイト(Here)",
            tag: ["Next.js","TypeScript","Tailwind CSS","daisyUI"]
        },
        {
            description: "Chorome拡張機能",
            tag: ["TypeScript","Plasmo","React","Python","RSS"]
        }
    ]
    return (
        <>
            <h3 className="text-xl">作成したコンテンツ</h3>
            <div className="flex gap-3">
                {DevContentList.map((DevContent,idx) => {
                    return (
                        <Card
                            key={idx}
                            title={DevContent.description}
                            optionClass="shadow-xl bg-base-100"
                            Button={
                                DevContent.tag.map((tag,tag_idx) => {
                                    return (
                                        <div className="flex flex-col" key={idx}>
                                            <button className="badge" key={tag_idx}>{tag}</button>
                                        </div>
                                    )
                                })
                            }
                        />
                    )
                })}
            </div>
        </>
    )
}
