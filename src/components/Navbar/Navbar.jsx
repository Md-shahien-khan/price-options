import { GrMenu} from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import Link from "../Link/Link";
import { useState } from "react";
const Navbar = () => {

    const[open, setOpen]  = useState(false)

    const routes = [
        { id: 1, path: '/home', name: 'Home' }, 
        { id: 2, path: '/about', name: 'About' }, 
        { id: 3, path: '/services', name: 'Services' }, 
        { id: 4, path: '/contact', name: 'Contact' }, 
        { id: 5, path: '/blog', name: 'Blog' }
      ];
      
    return (
        <nav className=" text-black bg-blue-500 p-6">
            <div className="md:hidden text-2x" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <MdOutlineClose></MdOutlineClose> : <GrMenu></GrMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static bg-blue-600 px-6
                ${open ? 'top-16' : '-top-60'}
                `}>
            {
                routes.map(route => <Link key={route.id} routeParameter={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;