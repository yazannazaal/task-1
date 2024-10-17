import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleNavClick = () => {
    setOpenNav(!openNav);
  };

  const pages = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "posts", route: "/posts" },
    { id: 3, name: "About", route: "/about" },
    { id: 4, name: "Contact", route: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center h-20 px-5 bg-slate-50 shadow-md">
      <h1 className="text-5xl text-black font-semibold">Task.1</h1>

      {/* desktop menu */}
      <ul className="hidden md:flex">
        {pages.map((page) => (
          <Link
            className="p-3 text-black hover:text-gray-400 transition duration-300"
            to={page.route}
            key={page.id}
          >
            {page.name}
          </Link>
        ))}
      </ul>

      {/* mobile icon for meny */}
      <div
        className="md:hidden cursor-pointer text-black"
        onClick={handleNavClick}
      >
        <IoMdMenu size={30} />
      </div>

      {/* mobile menu */}
      <ul
        className={`fixed top-0 right-0 text-center pt-20 bg-white text-black border-l border-l-gray-300 w-1/4 h-full z-50 transform transition-transform duration-500 ${
          openNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleNavClick}
          className="absolute top-2 right-2 text-black"
        >
          <IoIosClose size={30} />
        </button>

        {pages.map((page) => (
          <li
            className="p-7 hover:bg-gray-200 transition duration-300"
            key={page.id}
          >
            <Link className="text-black" to={page.route}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
