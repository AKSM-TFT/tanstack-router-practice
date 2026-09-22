import Codeblock from '#/components/Codeblock'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/content/routing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-8 bg-[#0a0a0a] flex flex-1 text-white justify-center">
      <div className="max-w-[890px] w-screen">
        <Link to="/content" className="hover:underline text-gray-400">&lt; Back to content</Link>
        <h1 className="text-4xl font-bold my-4 underline">Routing in Tanstack Router</h1>
        <p>Routing in Tanstack Router is really simple. You just need to create a tsx file inside the <code>routes</code> directory, and Tanstack will 
        handle how your routes will be used. To create nested routes, just create a directory with a <code>.tsx</code> file within the <code>routes</code> directory.</p>
        <p>For example, If I want to create a route to <code>/navigation</code>, I just need to create a file called '<code>content.tsx</code>' inside the <code>routes</code> directory. 
        Once the file is created, a route will be generated in the <code>routeTree.gen.tsx</code> which contains the mapping of all routes and their respective childs.</p>
        <p className="text-lg italic my-4">index.tsx inside content directory code:</p>
        <Codeblock code={`import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/content/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    ...component code...
  )
}
`} />
        <p className="text-lg italic my-4">Auto-generating routing in routeTree.gen.tsx code:</p>
        <Codeblock code={`const ContentIndexRoute = ContentIndexRouteImport.update({
  id: '/content/',
  path: '/content/',
  getParentRoute: () => rootRouteImport,
} as any)
`} />
      </div>
    </div>
  )
}
