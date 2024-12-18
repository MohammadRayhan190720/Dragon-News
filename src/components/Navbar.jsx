import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {

  const {user, handleSignOut} = useContext(AuthContext);

  const links = <>
  <Link className="mr-5" to='/'>Home</Link>
  <Link className="mr-5" to='/about'>About</Link>
  <Link className="mr-5" to='/career'>Career</Link>
  </>
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <p>{user?.email}</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3 items-center">
      {
        user && user?.email ? <div className="flex flex-col justify-center items-center">
          <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
          <p>{user.displayName}</p>
        </div>  :   <p className="text-5xl">
          <FaUserCircle />
        </p>
      }
        {user && user.email ? (
          <button onClick={handleSignOut} className="px-7 py-4 rounded-none btn-neutral btn">
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="px-7 py-4 rounded-none btn-neutral btn"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;