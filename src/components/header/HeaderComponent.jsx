import Logo from "../../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full">
        <div className="bg-white py-2.5 shadow-md">
          <div className="md:px-10 py-2.5 px-7 md:flex justify-between items-center text-center">
            <div className="flex text-2xl cursor-pointer items-center gap-1">
              <a href="#" className="flex items-center">
                <img
                  src={Logo}
                  className="h-6 mr-3 sm:h-9"
                  alt="Logo  de la empresa"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Datanalytics
                </span>
              </a>
            </div>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
            >
              {isOpen ? <IoClose /> : <RxHamburgerMenu />}
            </div>

            <ul
              className={`mt-3 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                isOpen ? "top-12" : "top-[-490px]"
              }`}
            >
              <li className="font-medium my-4 md:my-0 md:ml-8">
                <Link
                  to="/"
                  className="uppercase text-black hover:text-blue-700 transition-all ease-out"
                >
                  Página principal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
