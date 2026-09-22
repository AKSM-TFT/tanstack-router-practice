import Codeblock from '#/components/Codeblock'
import { createFileRoute, Link, useParams } from '@tanstack/react-router'

interface User {
  userId: number;
  name: string;
}

export const Route = createFileRoute('/content/dynamic-routing/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams();

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
    <div className="p-8 bg-[#0a0a0a] flex-1 text-white">
      <Link to="/content/dynamic-routing" className="hover:underline text-gray-400">&lt; Back to Dynamic routing</Link>
      <p className="my-4">Take a look at url. Notice anything different? The url is now:</p>
      <Codeblock code={`/content/dynamic-routing/${userId}`} />
      <p className="my-4">The power of dynmic routing is noticable when we want to display information that is unique to a record, yet still needs the same UI. 
        In this case, the unique information that should be shown is the name associated to the ID, which is  
      <span className='italic'> {users.find(user => user.userId === Number(userId))?.name ?? 'Unknown User'}</span>.
      </p>
      <p  className="my-4">To use the parameter, we need to use the useParams() hook. The example below was used in this code, 
        which allowed us to get the userId from the passed parameters and use that id to fetch the name in a local array.</p>
      <Codeblock code="const { userId } = Route.useParams();" />
    </div>
  )
}
