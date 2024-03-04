import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="relative text-white">
      {/* <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex space-x-4 justify-center items-center">
          <a
            className="text-slate-900 font-semibold hover:text-blue-700 duration-100"
            href="#home"
          >
            Inicio
          </a>
          <a
            className="text-slate-900 font-semibold hover:text-blue-700 duration-100"
            href="#services"
          >
            Servicios
          </a>
          <a
            className="text-slate-900 font-semibold hover:text-blue-700 duration-100"
            href="#experiences"
          >
            Experiencia
          </a>
          <a
            className="text-slate-900 font-semibold hover:text-blue-700 duration-100"
            href="#contact"
          >
            Contacto
          </a>
        </div>
        <div className="flex justify-center mt-5 space-x-5">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 dark:hover:text-white dark:text-gray-500"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="#"
            className=" text-gray-700 hover:text-gray-900 dark:hover:text-white dark:text-gray-500"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className=" text-gray-700 hover:text-gray-900 dark:hover:text-white dark:text-gray-500"
          >
            <GrInstagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className=" text-gray-700 hover:text-gray-900 dark:hover:text-white dark:text-gray-500"
          >
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
      </div> */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="relative block fill-gray-50"
        ></path>
      </svg>

      <div className="absolute top-0 left-0 w-full overflow-hidden max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <h1 className="text-3xl font-semibold text-white">Contactanos</h1>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-white font-light mb-0">Teléfono</h2>
            <p className="text-white text-sm">
              Estamos disponibles a oírte y responder por teléfono cualquier
              inquietud que puedas tener.
            </p>
            <a href="tel:+51961352833" className="text-white">
              (+51) 961 352 833
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-white font-light mb-0">Email</h2>
            <p className="text-white text-sm">
              Si prefieres puedes escribirnos un correo electrónico a nuestro
              mail e inmediatamente te responderemos.
            </p>
            <a
              className="mb-3"
              href="mailto:datanalytics.digital?Subject=Interesado%20en%20el%20servicio"
            >
              contacto@datanalytics.digital
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-white font-light mb-0">Ubicación</h2>
            <p className="text-white text-sm">
              Si prefieres podemos visitar su lugar de trabajo y resolver todas
              sus inquietude.
            </p>
            <a href="#" className="text-white mb-3">
              Lima - San Juan de Miraflores
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-white font-light mb-0">
              Redes Sociales
            </h2>
            <div className="grid grid-cols-4">
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <GrInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
