import { NavLink } from "react-router-dom"
import './navbar.css'
import { useAuth } from './../../Hooks/useAuth';
export const navItems = (
  <>
    
    <li className="link-container">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          `${
            isActive ? " font-bold text-[#FF3811] hover:bg-transparent   " : ""
          }active-route text-lg`
        }
      >
        Home
      </NavLink>
    </li>

    <li className="link-container">
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          `${
            isActive ? " font-bold text-[#FF3811] hover:bg-transparent   " : ""
          } active-route text-lg`
        }
      >
        Login
      </NavLink>
    </li>
  </>
);