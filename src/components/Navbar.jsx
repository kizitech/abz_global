import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-6 backdrop-blur-lg border-b bg-[#0C0C0C] border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center mb-2 lg:mb-0">
          <div className="flex items-center flex-shrink-0">
            <img className="h-8 w-8 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-white">ABZ Global</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-6">
            {navItems.map((item, index) => (
              <li key={index} className="border-r border-gray-600 pr-6 last:border-r-0 flex items-center">
                <a href={item.href} className="text-base text-gray-300 hover:text-gray-50">{item.label}</a>
                {index === navItems.length - 1 && (
                  <span className="bg-red-600 text-white px-2 py-0.5 rounded-2xl text-xs ml-3 flex items-center">New</span>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="bg-[#2B5FEF] text-white py-2 px-6 rounded-md font-medium">
              Sign Up
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center h-[70vh] items-start lg:hidden">
            <ul className=" w-full">
              {navItems.map((item, index) => (
                <li key={index} className={`py-4 border-b border-gray-600 pb-6 last:border-b-0 ${index === navItems.length - 1 ? "flex items-center" : ""} `}>
                  <a href={item.href} className="text-base text-gray-300 hover:text-gray-50">{item.label}</a>
                  {index === navItems.length - 1 && (
                    <span className="bg-red-600 text-white px-2 pt-[1px] pb-[2px] rounded-2xl text-[10px] ml-3 flex items-center">New</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-10">
              <a href="#" className="bg-[#2B5FEF] text-white py-2 px-6 rounded-md font-medium">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
