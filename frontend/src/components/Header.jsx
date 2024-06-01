import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import hm from "../assets/hm.svg";


export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white ring-1 ring-slate-900/5 z-10">
      <div className="flex justify-between items-center px-4 py-3 max-xs:px-2 w-full">
        {/* logo */}
        <div>
          <Link to="/">
            <img src={hm} alt="Logo" height={66} width={88} />
          </Link>
        </div>
        {/* Navbar Desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 "
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%] "
          }`}
        />
        {/* buttons */}
        <div className="flex items-center sm:gap-x-2 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          )}
          <div className="flex items-center sm:gap-x-6">
            <NavLink to="cart-page" className="flex relative">
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="absolute flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2 right-0">0</span>
            </NavLink>
            <NavLink
              to="logout"
              className="btn_secondary_rounded flex items-center gap-x-2 medium-16"
              style={{ width: '160px' }} // Adjusted width
            >
              <img src={logout} alt="Logout Icon" height={19} width={19} />
              Logout
            </NavLink>
            <NavLink
              to="login"
              className="btn_secondary_rounded flex items-center gap-x-2 medium-16"
              style={{ width: '160px' }} // Adjusted width
            >
              <img src={user} alt="User Icon" height={19} width={19} />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
