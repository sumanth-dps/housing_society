import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full xl:w-3/4 2xl:w-2/3 bg-orange-50 py-4 border-y  text-md font-semibold text-orange-700 px-4">
    
        <div className="hidden md:grid grid-cols-6 items-center">
          <div className="col-span-2">
            <img src="./housing_society.png" alt="Logo" className="w-32 ml-5" />
          </div>
          <a
            href="#home"
            className="hover:text-orange-400 transition duration-300 col-span-1 text-center"
          >
            HOME
          </a>
          <a
            href="#about"
            className="hover:text-orange-400 transition duration-300 col-span-1 text-center"
          >
            B06 Tower
          </a>
          <a
            href="#floorplans"
            className="hover:text-orange-400 transition duration-300 col-span-1 text-center"
          >
            FLOOR PLANS
          </a>
          <a
            href="#contact"
            className="hover:text-orange-400 transition duration-300 col-span-1 text-center"
          >
            CONTACT
          </a>
        </div>

  
        <div className="flex items-center justify-between md:hidden">
          <img src="./housing_society.png" alt="Logo" className="w-24" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-700 text-3xl focus:outline-none"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start gap-y-5 pl-3">
            <a
              href="#home"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </a>
            <a
              href="#about"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              B06 Tower
            </a>
            <a
              href="#floorplans"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              FLOOR PLANS
            </a>
            <a
              href="#contact"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
