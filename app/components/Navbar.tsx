import Link from "next/link";
import { Logout } from "./Icons";

export default function Navbar() {
    return(
        <div className="flex justify-between items-center px-20 w-full min-h-24 bg-black">
            <div className="flex">
                <span className="text-whtie font-bold text-white text-lg">Crokette</span>
            </div>
            <Link href={"post"} className="text-white font-bold bg-blue-600 p-2 rounded-lg">Poster</Link>
            <button className="bg-red-700 rounded-lg p-2"><Logout/></button>
        </div>
    )
}