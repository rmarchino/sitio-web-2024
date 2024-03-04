import BancoNacion from "../../assets/experiencias/b-n.png";
import GrupoKopsa from "../../assets/experiencias/grupo-kobsa.png";
import Lutem from "../../assets/experiencias/lfc.png";
import Fortel from "../../assets/experiencias/logo-fortel.png";
import UniPriNorte from "../../assets/experiencias/logo-upn.png";
import VidaSoftware from "../../assets/experiencias/vida-software.png";

const Experiencias = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Las empresas que confian en nosotros
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-80 h-32">
              <img
                className="object-cover h-full w-full"
                src={BancoNacion}
                alt="Imagen Banco de la Nación"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-80 h-32">
              <img
                className="object-cover h-full w-full"
                src={GrupoKopsa}
                alt="Imagen Analytics"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-80 h-32">
              <img
                className="object-cover h-full w-full"
                src={VidaSoftware}
                alt="Imagen Vida Software"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-80 h-32">
              <img
                className="object-cover h-full w-full"
                src={UniPriNorte}
                alt="Imagen Universidad Privada del Norte"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-80 h-32">
              <img
                className="object-cover h-full w-full"
                src={Lutem}
                alt="Imagen Lutem First Capital"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="mb-4 w-80 h-32">
              <img
                className="object-cover h-full w-full"
                src={Fortel}
                alt="Imagen Fortel"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
