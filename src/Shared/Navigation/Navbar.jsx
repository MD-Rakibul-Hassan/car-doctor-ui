import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { navItems } from './NavItems';
import { useTheme } from '../../Hooks/useTheme';
import { IoIosArrowDown } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
const Navbar = () => {
  const { theme, themeToggler, setTheme } = useTheme();
  
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img src={logo} alt="Logo" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown mr-5 dropdown-hover ">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-1  text-orange-500 px-5 py-4 rounded-md hover:bg-orange-500 hover:text-white duration-700 m-1"
            >
              Theme <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => themeToggler(setTheme("light"))}>
                  Dark <FaMoon />
                </button>
              </li>
              <li>
                <button onClick={() => themeToggler(setTheme("dark"))}>
                  Light <MdSunny />
                </button>
              </li>
            </ul>
          </div>

          <a className="p-4 text-orange-500 border-2 border-orange-500 rounded-md">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar