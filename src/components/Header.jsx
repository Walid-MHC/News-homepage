import { useEffect, useState } from "react";
import { iconMenu, iconMenuClose, logo } from "../assets";
import { navbar } from "../constants";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  

  return (
    <nav className="flex items-center justify-between px-4 py-8">
      <img src={logo} alt="logo" />

      <ul className="sm:flex hidden items-center justify-end gap-10">
        {navbar.map((navlink) => (
          <li>
            <a className="text-dark-grayish-blue hover:text-soft-red transition duration-150" href="#">
              {navlink.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex ">
        <img
          src={toggle ? iconMenuClose : iconMenu}
          alt="menu"
          className="relative z-10 cursor-pointer "
          onClick={() => {
            setToggle((t) => !t);
          }}
        />

        <div
          className={`${
            toggle ? "translate-x-[0]" : "translate-x-[100%]"
          } flex fixed bg-white top-0 right-0 left-[30%] bottom-0 transform transition duration-200`}
        >
          <ul className="flex-1 flex flex-col justify-center items-start">
            {navbar.map((navlink) => (
              <li key={navlink.name} className="ml-6 mb-[1.5rem]">
                <a className="text-dark-grayish-blue hover:text-soft-red transition duration-150" href="#">
                  {navlink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
