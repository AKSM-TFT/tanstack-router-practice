import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/content/navigation')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-8 bg-[#0a0a0a] flex flex-1 text-white justify-center">
      <div className="max-w-[890px] w-screen">
        <Link to="/content" className="hover:underline text-gray-400">&lt; Back to content</Link>
        <h1 className="text-4xl font-bold my-4 underline">Navigating through different routes</h1>
        <p>There are two ways to navigate in tanstack router. The first one is the <code>Link</code> component which is uses the <code>to</code> attribute 
        to connect it to a different route. The second is the useNavigate hook in react, where you will declare a <code>useNavigate</code> hook and call its methods.</p>
        <div className="flex gap-2 mt-4">
          <Link
            to="/content/navigation/link"
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 [&.active]:bg-blue-800"
          >
            Use Link Component
          </Link>
          <Link
            to="/content/navigation/use-navigate"
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 [&.active]:bg-blue-800"
          >
            Use useNavigate Hook
          </Link>
        </div>
        <br />
        <Outlet />
      </div>

    </div>
  )
}
