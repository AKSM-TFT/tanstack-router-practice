import Codeblock from '#/components/Codeblock'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/content/navigation/link')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h2 className="text-lg italic">When to use <code>Link</code> component</h2>
      <p className="mb-4">Use Link component if you can connect to a route without any logic or parameters you need to pass. For example, if I want to go to the about 
        page to content page, I'll just use this component since I have no data or restriction I need to provide between to routes.</p>
      <Codeblock code={`<Link to="/about" className="hover:underline">About</Link>`} />
    </div>
  )
}
