import { Link } from "@tanstack/react-router";

function NavBar() {
    return (
        <div className="bg-[#010101] text-white p-4 flex items-center justify-between gap-4">
            <Link to="/" className="text-lg font-bold hover:underline">
                TanStack Router Tutorial
            </Link>
            <ul className="flex gap-4">
                <li>
                    <Link to="/about" className="hover:underline">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/content" className="hover:underline">
                        Content
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;