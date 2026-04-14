import { NavLink, Link } from "react-router";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHome, AiOutlineBarChart } from "react-icons/ai";
import { MdOutlineTimeline } from "react-icons/md";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink 
          to="/" 
          
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#244D3F" : "transparent",
            color: isActive ? "white" : "inherit",
          })}
          className={({ isActive }) => 
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${!isActive ? "hover:bg-gray-100" : ""}`
          }
        >
          <AiOutlineHome className="text-lg" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/timeline" 
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#244D3F" : "transparent",
            color: isActive ? "white" : "inherit",
          })}
          className={({ isActive }) => 
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${!isActive ? "hover:bg-gray-100" : ""}`
          }
        >
          <MdOutlineTimeline className="text-lg" /> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/stats" 
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#244D3F" : "transparent",
            color: isActive ? "white" : "inherit",
          })}
          className={({ isActive }) => 
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${!isActive ? "hover:bg-gray-100" : ""}`
          }
        >
          <AiOutlineBarChart className="text-lg" /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="navbar container mx-auto px-4 md:px-8">
        
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-2xl">
              <HiMenuAlt3 />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow-lg gap-2"
            >
              {navOptions}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Navbar End: Menu Items */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {navOptions}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;