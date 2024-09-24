import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { navItems } from './NavItems';
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="p-4 text-orange-500 border-2 border-orange-500 rounded-md">Appointment</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar