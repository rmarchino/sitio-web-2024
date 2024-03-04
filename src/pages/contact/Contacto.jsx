import ContactoIMG from "../../assets/contacto/call-me.jpg";

const Contacto = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Formulario de contacto
          </h2>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 items-stretch">
          <form className="flex flex-col justify-between w-full sm:max-w-md lg:max-w-lg mx-auto p-6 space-y-6 bg-white border border-gray-100 rounded-lg shadow-lg">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="nombre_cli"
              >
                Nombre
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                name="nombre_cli"
                id="nombre_cli"
                placeholder="Datanalytics"
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="contacto@datanalytics.digital"
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                name="message"
                id="message"
                required
              ></textarea>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="service"
              >
                Servicio
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                name="service"
                id="service"
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="service1">Servicio 1</option>
                <option value="service2">Servicio 2</option>
                <option value="service3">Servicio 3</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="terms" id="terms" required />
              <label className="ml-2 text-sm text-gray-600" htmlFor="terms">
                Acepto los términos y condiciones
              </label>
            </div>
            <button
              className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              type="submit"
            >
              Enviar
            </button>
          </form>
          <div className="flex items-center justify-center w-full h-full lg:h-auto">
            <img
              className="object-cover"
              src={ContactoIMG}
              alt="Image contacto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
