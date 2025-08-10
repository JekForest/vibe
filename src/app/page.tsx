import { prisma } from "@/lib/db"

const Page = async ()=>{
  const posts = await prisma.post.findMany()

  return (
    <div>
      {JSON.stringify(posts,null,2)}
    </div>
  )
}

// 必须默认到处，不然找不到页面
export default Page