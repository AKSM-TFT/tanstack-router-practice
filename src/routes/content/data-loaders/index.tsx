import Codeblock from '#/components/Codeblock';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/content/data-loaders/')({
  loader: () => fetchSlowPosts(),
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData();

  return (
    <div className="p-8 bg-[#0a0a0a] flex-1 text-white">
      <div className="max-w-[890px] w-screen">
        <Link to="/content" className="hover:underline text-gray-400">&lt; Back to content</Link>
        <h1 className="text-4xl font-bold my-4 underline">Loaders vs ReactQuery</h1>
        <p>Both tools is a backend tool used to fetch data, however, they do it in a different way. Loaders, as the name suggests,
          loads the data before mounting the component. ReactQuery does the search after the component mounts, meaning there is a short
          loading time before the component re-mounts with the data.</p>
        <div className="flex gap-2 my-7 max-h-[500px] overflow-hidden">
          <div className="flex-1 bg-[#111111] p-2 border-1 border-[#2d2d2d]">
            <h2 className="text-2xl bold italic mb-7">Loader loaded data</h2>
            <p>{JSON.stringify(loaderData)}</p>
          </div>
          <div className="flex-1 bg-[#111111] p-2 border-1 border-[#2d2d2d]">
            <h2 className="text-2xl bold italic mb-7">React Query loaded data</h2>
            <QueryComponent />
          </div>
        </div>
        <p>Before navigating to this page, it takes 5 seconds due to a delay I configured. Normally, it would take around 150 milliseconds to fetch the data.
          React Query will stil show the loading text for that short amount of time, which is an example of bad UI design. However, once that data is loaded with React Query, 
          It'll assumed that the data is stale and store it in the cache, which will be removed 5 minutes after it becomes inactive or when the component unmounts.
        </p>
        <p>Loader comes in when we want the data preloaded before the user sees the actual component. The drawback for loaders is that when the functions takes a long time to finish, 
          if it takes around 5 seconds, it may seem like the screen froze since it won't navigate until the data is fully loaded. Use loader when the data you 
          want to fetch when it is the main part of the page.
        </p>
        <h2 className="text-2xl my-4">Loaders with Param</h2>
        <p className="mb-4">The great thing with loaders is that you can connect it to a dynamic route and the the parameters from the route, and use that to fetch specific data. Say we have 
          a route <code>/posts/$postId</code>, and we want to load the data before heading to the actual page. We could use dynamic routing with loader to fetch that by using this structure: </p>
          <Codeblock code="loader: ({ params }) => fetchPostById(params.postId)" />
      </div>
    </div>
  )
}

function QueryComponent() {
  const { data, isPending } = useQuery({
    queryKey: ["slowPosts"],
    queryFn: fetchSlowPosts,
  })

  return (
    isPending ?
      <div>
        <p>useQuery still loading...</p>
      </div>
      :
      <div>
        {JSON.stringify(data)}
      </div>
  )
}

const fetchSlowPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      const spliced = data.splice(1);
      resolve(spliced)
    }, 5000)
  })
}


