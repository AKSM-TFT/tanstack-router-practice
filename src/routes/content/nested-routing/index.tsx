import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/content/nested-routing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-8 bg-[#0a0a0a] flex-1 text-white">
      <Link to="/content" className="hover:underline text-gray-400">&lt; Back to content</Link>
    </div>
  )
}
