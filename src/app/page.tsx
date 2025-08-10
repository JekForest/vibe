import { Suspense } from "react"
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { Client } from "./client"

const Page = async ()=>{
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: 'LOOK!'}))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}

// 必须默认到处，不然找不到页面
export default Page