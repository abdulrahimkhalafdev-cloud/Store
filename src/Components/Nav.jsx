import { Link } from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci";
// import logo from '../assets/logo.png'
// import { FiShoppingCart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
export default function Nav() {
    // p-3 w-full fixed
    return (
        <nav className="bg-purple-700 w-full p-3 fixed bottom-0 left-0 z-50  ">
            <ul className=" flex items-center justify-around  list-none text-white text-lg capitalize ">
                <Link to={"/"}> <li className=" hover:bg-gray-500 p-1"><CgProfile size={28}/></li> </Link>
                <Link to={"/Home"}> <li className="hover:bg-gray-500 p-1"> <IoMdHome size={28}/>  </li> </Link>
                <Link to={"/Sala"}> <li className="hover:bg-gray-500 p-1"> <FiShoppingCart size={26}/> </li> </Link>
                {/* <Link to={"/About"}><li></></li></Link> */}
                {/* <CiMenuBurger className="text-black text-3xl cursor-pointer"/> */}
            </ul>
        </nav>
    )
}
