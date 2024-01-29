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
                        <div className="card card-compact w-40 bg-base-100 shadow-xl" key={idx}>
                            <figure>
                                <img alt="Sample" src="https://picsum.photos/id/1005/400/250" className="rounded-t-lg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{DevContent.description}</h2>
                                <div className="justify-end card-actions">
                                    <div>
                                        {DevContent.tag.map((tag,tag_idx) => {
                                            return (
                                                <button className="badge" key={tag_idx}>{tag}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
