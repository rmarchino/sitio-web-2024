import Hero from "../../assets/images/businesspeople.jpg";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-800 fondo py-10">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7 text-start">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-gray-900 mb-3">
            DATA SCIENCE ANALYTICS DESARROLLO WEB
          </h1>
          <h2 className="text-2xl font-bold text-gray-900">¿QUIENES SOMOS?</h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500">
            Somos una empresa que brinda soluciones en Analytics, Ciencia de
            Datos, Minería de Datos, Web scraping, ETL, Machine Learning y
            Desarrollo web. Potenciamos la toma de decisiones a partir de datos
            para su negocio.
          </p>

          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              to="servicios"
              className="bg-gradient-to-r from-green-400 to-blue-500 inline-flex items-center justify-center w-full px-8 py-4 text-sm font-bold text-center rounded-lg sm:w-auto text-white"
            >
              Ver servicios
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={Hero}
            loading="lazy"
            className="rounded-lg"
            alt="Imagen logo"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
