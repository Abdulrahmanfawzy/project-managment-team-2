import SearchDemo from "@/features/tasks/components/Search"
import { NavLink } from "react-router"

function Navbar() {

    const list=[
        {name: "Dashboard", path: "/"},
        {name: "Projects", path: "/projects"},
        {name:"Tasks", path: "/tasks"},
        {name: "Chats", path: "/chats"},
        {name: "Meetings", path: "/meetings"},
        {name: "Reports", path: "/reports"}
    ]

    return (
        <nav className="flex justify-between items-center bg-white text-black py-5 px-10">
            <div className="flex gap-6 items-center ">
                <h3 className="text-xl font-bold">Collabspace</h3>
                <ul className="hidden md:flex gap-4 bg-gray-100 px-4 py-3 rounded-3xl text-sm">
                    {list.map((item,i)=>(
                        <li className=" cursor-pointer" key={i}>
                            <NavLink to={item.path} className="">
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="">
                <SearchDemo/>
            </div>
        </nav>
    )
}

export default Navbar
