import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { IoStatsChartOutline } from "react-icons/io5";
import logo from "../assets/logo.png";


const NavBar = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "bg-[#0F766E] text-white rounded-md px-5 py-3 flex items-center gap-2 font-semibold text-lg"
      : "text-gray-500 px-5 py-3 flex items-center gap-2 font-medium text-lg";

  return (
    <div className="bg-white border-b border-cyan-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        <img src={logo} alt="KeenKeeper" className="w-36" />

        <div className="flex items-center gap-4">
          <NavLink to="/" className={navStyle}>
            <HiOutlineHome className="text-xl" />
            Home
          </NavLink>

          <NavLink to="/timeline" className={navStyle}>
            <FiClock className="text-xl" />
            Timeline
          </NavLink>

          <NavLink to="/stats" className={navStyle}>
            <IoStatsChartOutline className="text-xl" />
            Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;