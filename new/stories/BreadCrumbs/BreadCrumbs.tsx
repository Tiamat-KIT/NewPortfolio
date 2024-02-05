import "../../app/globals.css"
export type BreadCrumbsProps = {
    PathName: string,
    PathRoute: string
}
export default function BreadCrumbs({Path}:{Path:BreadCrumbsProps[]}){
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                {Path.map((item,index)=>{
                    return (
                        <li key={index}>
                            <a href={item.PathRoute}>{item.PathName}</a>
                        </li>
                    
                    )
                })}
            </ul>
        </div>
    )
}