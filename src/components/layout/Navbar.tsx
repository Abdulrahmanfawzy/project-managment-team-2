
import { useState } from "react"
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router";
import { BellDot, Heart, LogOut, Search, ShoppingCart } from "lucide-react";
import DropdownProfileMenu from "../shared/DropDownProfile"

function Navbar () {
    const [open, setOpen] = useState(false)
    const navigate= useNavigate()
    
    const logoutHandler= ()=>{
        localStorage.clear()
        navigate('/login')
    }

  const list = [
    { name: "Dashboard", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Tasks", path: "/tasks" },
    { name: "Reports", path: "/reports" },
    { name: "Chats", path: "/chats" },
    { name: "Meetings", path: "/meetings" },
  ];

    return (
      <div className="bg-white ">
          <nav className="max-w-7xl mx-auto sticky z-10 top-0 flex items-center justify-between py-4 px-3 md:px-5 lg:px-10 xl:px-4 transition-all text-black">
              <div className="flex gap-8 items-center">
                <Link to="/" className="text-xl font-bold font">Collabspace</Link>

                {/* Desktop Menu */}
                  <ul className="hidden sm:flex sm:gap-2 items-center bg-gray-100 px-2 py-3.5 rounded-4xl text-sm">
                    {list.map((item, i) => (
                      <li className=" cursor-pointer" key={i}>
                        <NavLink to={item.path} className="px-3 py-2">
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
      
              <div className="flex items-center justify-center gap-8">
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search" />
                    <Search className="text-xl"/>
                </div>

                <BellDot className="h-5 w-5"/>

                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-end">
                    <h3 className="font-medium text-sm">Mohamed Ali</h3>
                    <span className="text-sm text-gray-500">Frontend</span>
                  </div>
                  <DropdownProfileMenu/>
                </div>

              </div>

              {/* Menu Icon SVG */}
              <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                  <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="21" height="1.5" rx=".75" fill="#426287" />
                      <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                      <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                  </svg>
              </button>

              {/* Mobile Menu */}
              <div className={`${open ? 'flex' : 'hidden'} absolute top-15 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden cursor-pointer`}>
                  {list.map((item, i) => (
                    <NavLink to={item.path} className="block px-3 py-2" key={i}>
                      {item.name}
                    </NavLink>
                  ))}
                  <Button onClick={logoutHandler} variant="destructive" className="cursor-pointer">
                      <LogOut />
                      Log out
                  </Button>
              </div>

          </nav>
      </div>
    )
}
export default Navbar