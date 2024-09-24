import { NavLink } from "react-router-dom"
export const navItems = <>
    <li>
        <NavLink to='/' className={({ isActive, isPending }) => `${isActive ? 'text-xl text-orange-500 p-3 border-2 border-orange-500' : ''} p-4`}>
        Home
        </NavLink>
    </li>
    <li>
        <NavLink to='/contact' className={({ isActive, isPending }) => `${isActive ? 'text-xl text-orange-500 p-3 border-2 border-orange-500' : ''} p-4`}>
        Contact
        </NavLink>
    </li>
    <li>
        <NavLink to='/about' className={({ isActive, isPending }) => `${isActive ? 'text-xl text-orange-500 p-3 border-2 border-orange-500' : ''} p-4`}>
        About
        </NavLink>
    </li>
</>