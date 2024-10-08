import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  name: string;
  link: string;
  icon: React.ElementType;
  margin?: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const menus: MenuItem[] = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/user", icon: AiOutlineUser },
    { name: "Search", link: "/search", icon: FiSearch },
    { name: "Cart", link: "/cart", icon: FiShoppingCart },
    { name: "Settings", link: "/settings", icon: RiSettings4Line },
  ];

  const handleMenuClick = () => {
    onClose(); // Close the menu when a menu item is clicked
  };

  return (
    <section className="flex gap-6">
      <div
        className={`min-h-screen ${
          isOpen ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              onClick={handleMenuClick} // Trigger menu close on click
              className={`${
                menu.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2  rounded-md hover:-translate-y-1 hover:scale-110 duration-300`}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  isOpen && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
