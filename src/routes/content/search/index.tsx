import Codeblock from '#/components/Codeblock'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/content/search/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="p-8 bg-[#0a0a0a] flex-1 text-white">
            <div className="max-w-[890px] w-screen">
                <Link to="/content" className="hover:underline text-gray-400">&lt; Back to content</Link>
                <h1 className="text-4xl font-bold my-4 underline">Search Params</h1>
                <p>Search params allows you to use the URL as a paramater to filter the data. When you see a <code>?</code> after your route, it means that the
                    route expects some search params. Let me give you an example:</p>
                <p className="mb-4">The code below is a zod typescript schema validator which allows us to define the schema of an object. 
                    Below is an example of a search schema so tanstack will understand which parameters are allowed:
                </p>
                <Codeblock code={`const productSearchSchema = z.object({
    category: z.enum(["All", "Running", "Casual"]).default("
    All),
    brand: z.enum(["All", "Nike", "Adidas", "Converse"]).default("
    All),
    sortBy: z.enum(["name","price-asc","price-desc"]).default("name"),
    page: z.number().int().positive().default(1)
})`} />
                <p className="my-4">
                    This is a type that enforces the schema of the zod object.
                </p>
                <Codeblock code="type ProductSearch = z.infer<typeof productSearchSchema>" />
                <p className="my-4">
                    We need to call the validateSearch function inside our route and provide the schema for it to understand which parameters we are looking for.
                </p>
                <Codeblock code={`export const Route = createFileRoute("/shop")({
    component: RootComponent,
    validateSearch: productSearchSchema,
})`} />
                <p className="my-4">
                    Declare the route params so we can use it inside the actual components and filter out the data.
                </p>
                <Codeblock code={`function RouteComponent() {
    const searchParams = Route.useSearch()
    console.log(searchParams)                 
}`} />
                <p className="my-4">
                    After declaring the search params, our route adds <code>?category=all&brand=all&sortBy=name&page=1</code> by default as define in our zod schema. 
                    If we change it to something like <code>?category=Running&brand=Adidas&sortBy=name&page=1</code>, then the search param object will change the value for brand and category.
                </p>
            </div>
        </div>
    )
}
