import { Link } from "react-router-dom";
import LogoPage from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="bg-white py-2.5 shadow-md">
        <div className="md:px-10 py-2.5 px-7 md:flex justify-between items-center text-center">
          <div className="flex text-2xl cursor-pointer items-center gap-1">
            <Link className="flex items-center">
              <img
                src={LogoPage}
                loading="lazy"
                className="h-6 mr-3 sm:h-9"
                alt="Logo DatAnalytics"
              />
              <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white uppercase">
                DatAnalytics
              </h1>
            </Link>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </div>

          <ul
            className={`mt-3 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
            ${isOpen ? "top-14" : "top-[-490px]"}`}
          >
            <li className="font-medium my-4 md:my-0 md:ml-8">
              <Link
                to={"/"}
                className="uppercase text-black hover:text-blue-700 transition-all ease-out"
              >
                Página principal
              </Link>
            </li>
            <li className="font-medium my-4 md:my-0 md:ml-8">
              <Link
                to="servicios"
                className="uppercase text-black hover:text-blue-700 transition-all ease-out"
              >
                Servicios
              </Link>
            </li>
            <li className="font-medium my-4 md:my-0 md:ml-8">
              <Link
                to="experiencias"
                className="uppercase text-black hover:text-blue-700 transition-all ease-out"
              >
                Experiencia
              </Link>
            </li>
            <li className="font-medium my-4 md:my-0 md:ml-8">
              <Link
                to="contactos"
                className="uppercase text-black hover:text-blue-700 transition-all ease-out"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
