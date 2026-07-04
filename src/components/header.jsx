

import { NavLink ,useNavigate} from "react-router-dom";

import { FiMoon} from "react-icons/fi";

function Header() {
    const navigate = useNavigate();
    
  return (
    <nav className="navigation bg-gray-900 text-white p-4 inline-flex w-screen">
      <div
        className="flex cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <p className="heading text-3xl font-bold heading ">Jayendra</p>
        <p className="dev text-2xl font-bold-5 mt-1 ">.dev</p>
      </div>
      <ul className="flex gap-10 mt-1 ml-auto text-lg ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#00d9FF]" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#00d9FF]" : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "text-[#00d9FF]" : "text-white"
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-[#00d9FF]" : "text-white"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#00d9FF]" : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        className="text-2xl hover:text-yellow-400 ml-7"
      >
        { <FiMoon /> }
      </button>
    </nav>
  );
}

export default Header;
