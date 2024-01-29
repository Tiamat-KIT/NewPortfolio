import { BlogType, getList } from "@/libs/microcms";
import "../app/globals.css"
export default async function BlogView({Pagenation}:{Pagenation: number}){
    const { contents } = await getList();
    function SplitArray(array: BlogType[],n: number){
        const result = [];
        for(let i = 0; i < array.length; i += n){
          result.push(array.slice(i,i+n));
        }
        return result;
      }
    const BlogList = SplitArray(contents,5);
    const Blog = BlogList[Pagenation];
    
    return (
        <>
            {Blog.map((content, idx) => {
                    return(
                      <div className="border-gray-300 border-[0.3px] divide-2 rounded-lg shadow-xl basis-1 my-4" key={idx}>
                        <h5 className="text-md hero">{content.title}</h5>
                      </div>
                    )
            })}
        </>
    )
}