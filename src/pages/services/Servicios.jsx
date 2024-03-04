import Analytics from "../../assets/servicios/analytics.jpg";
import Autoprocess from "../../assets/servicios/auto-process.jpg";
import Datascience from "../../assets/servicios/data-science.jpg";

const Servicios = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Nuestros Servicios
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Card 1 */}
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-64 h-64">
              <img
                className="object-cover h-full w-full"
                src={Analytics}
                alt="Imagen Analytics"
                loading="lazy"
              />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">Analítica</h3>
            <p className="mb-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium architecto veniam repellendus.
            </p>
            <a
              href="#"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
            >
              Más información
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-64 h-64">
              <img
                className="object-cover h-full w-full"
                src={Autoprocess}
                alt="Image Auto-procesos"
                loading="lazy"
              />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">
              Automatización de Procesos
            </h3>
            <p className="mb-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium architecto veniam repellendus.
            </p>
            <a
              href="#"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
            >
              Más información
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-64 h-64">
              <img
                className="object-cover h-full w-full"
                src={Datascience}
                alt="Image Datascience"
                loading="lazy"
              />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">Data Science</h3>
            <p className="mb-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium architecto veniam repellendus.
            </p>
            <a
              href="#"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
