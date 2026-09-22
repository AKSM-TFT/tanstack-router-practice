import Codeblock from '#/components/Codeblock'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/content/navigation/use-navigate')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h2 className="text-lg italic">When to use <code>useNavigate</code> hook</h2>
      <p className="mb-4">Use useNavigate hook when you want some logic and data you want to pass to a route. For example, you want to restrict some routes, 
        you can add a logic like isUserAuthenticated to only allow authorized users. We could also pass data to load dynamic components.</p>
      <Codeblock code={`<Link to="/about" className="hover:underline">About</Link>`} />
    </div>
  )
}
