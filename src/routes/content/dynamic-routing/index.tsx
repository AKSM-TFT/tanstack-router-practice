import { createFileRoute, Link } from '@tanstack/react-router'

interface User {
  userId: number;
  name: string;
}

export const Route = createFileRoute('/content/dynamic-routing/')({
  component: RouteComponent,
})

function RouteComponent() {
  const users: User[] = [
    {
      "userId": 1,
      "name": "Kyle"
    },
    {
      "userId": 2,
      "name": "Aaron"
    },
    {
      "userId": 3,
      "name": "Ellaine"
    },
    {
      "userId": 3,
      "name": "Jaja"
    },
  ]

  return (
    <div className="p-8 bg-[#0a0a0a] flex flex-1 text-white justify-center">
      <div className="max-w-[890px] w-screen">
        <Link to="/content" className="hover:underline text-gray-400">&lt; Back to content</Link>
        <h1 className="text-4xl font-bold my-4 underline">Dynamic Routing</h1>
        <p>Dynamic routing is a technique that allows a single route template to handle multiple unique URLs by capturing variable
          parts of the path (known as parameters or slugs).</p>
        <p>Instead of creating a separate route file for every individual item (like /posts/1, /posts/2, /posts/react-guide),
          you create one dynamic file that automatically adapts based on whatever ID or name is entered in the URL.</p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Creating a dynamic route</h2>
        <p>To create a dynamic route, you just need to create a file inside the folder you want it to route to.
          It should have a $ at the start of the file name to indicate the it takes a parameter and is dynamic. For example, I created a file inside this folder
          called <code>'$userId'</code> which means it is dynamic route that takes userId as a parameter.</p>

        <div className="flex gap-2 my-4">
          {users.map((user) => (
            <NameCard user={user} />
          ))}
        </div>

        <p>Each button have above has their own routes. Try clicking one.</p>
      </div>
    </div>
  )
}

function NameCard({ user }: { user: User }) {
  const { userId, name } = user;
  return (
    <Link to="/content/dynamic-routing/$userId" params={{ userId: String(userId) }}>
      <div className="flex py-4 border-1 w-50 align-center justify-center">
        <p>{name}</p>
      </div>
    </Link>
  )
}