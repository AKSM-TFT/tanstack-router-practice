import Codeblock from '#/components/Codeblock'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-8 bg-[#0a0a0a] text-white flex-1">
      <div className="mb-4">
        <h1 className="text-4xl font-bold">Getting Started with Tanstack Router</h1>
        <p className="my-4 text-lg">
          The fastest way to get started with TanStack Router is run the following:
        </p>
        <Codeblock code="npx @tanstack/cli create --router-only" />
        <h2 className="my-2 text-lg font-bold">Tanstack router allows:</h2>
        <ul className="mt-4 list-disc list-outside ml-8">
          <li><span className="italic">File-based routing generation:</span> Allows developers to create the routes based on the file structure inside the <code>src/routes/</code> directory.</li>
          <li><span className="italic">TypeScript support:</span> .</li>
          <li><span className="italic">Tailwind CSS Integration:</span> Integration of Tailwind CSS for faster development for React Components.</li>
          <li><span className="italic">Toolchain setup:</span> .</li>
          <li><span className="italic">Git initialization:</span> .</li>
          <li><span className="italic">Agentic tools setup:</span> .</li>
        </ul>
      </div>

      <div className="mb-4">
        <h1 className="text-xl font-bold">Existing React Projects</h1>
        <p className="mb-4 text-lg">
          If you've already initialized your React project, Don't worry and just run the code below:
        </p>
        <Codeblock code="npm i @tanstack/react-router" />
      </div>
    </div>
  )
}
