import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiSearch } from 'react-icons/fi';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () => {
      logOut()
      .then()
      .catch()
  }
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff444a]  " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff444a]  " : ""
          }
        >
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff444a]  " : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff444a]  " : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff444a]  " : ""
          }
        >
        Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signIn"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff444a]  " : ""
          }
        >
       SignIn
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-8">
             <div>
             <img className="h-14 w-28" src={logo} alt="" />
             </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Your Description"
                className="input input-bordered input-secondary w-full max-w-xs"
              />
              <FiSearch className="absolute mt-[-30px] ml-2"></FiSearch>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-5">{links}</ul>
        </div>
        <div className="navbar-end">
        {
          user ? 
          <button onClick={handleSignOut} className="btn btn-primary">Sign out</button>
          :
          
          <Link to="/signin" className="btn btn-primary">SignIn</Link>
       
        }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
