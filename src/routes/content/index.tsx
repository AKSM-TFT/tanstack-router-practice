import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/content/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-8 bg-[#0a0a0a] flex-1 text-white">
        <h1 className="text-4xl font-bold">Tanstack Router Concepts</h1>
        <p className="mt-4 text-lg">
          Learn more about the concepts behind TanStack Router in this section.
        </p>
        <div>
            <ul className="mt-4 list-disc list-inside">
                <li>
                    <Link to="/content/routing" className="hover:underline">Routing</Link>
                </li>
                <li>
                    <Link to="/content/navigation" className="hover:underline">Navigation</Link>
                </li>
                <li>
                    <Link to="/content/nested-routing" className="hover:underline">Nested Routing</Link>
                </li>
                <li>
                    <Link to="/content/layout-routes" className="hover:underline">Layout Routes</Link>
                </li>
                <li>
                    <Link to="/content/dynamic-routing" className="hover:underline">Dynamic Routing</Link>
                </li>
                <li>
                    <Link to="/content/data-loaders" className="hover:underline">Data Loaders</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
