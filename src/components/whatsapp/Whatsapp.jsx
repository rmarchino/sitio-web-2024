import { IoLogoWhatsapp } from "react-icons/io5";

export const Whatsapp = () => {
  return (
    <>
      <div className="fixed left-0 bottom-0 mb-4 ml-4 z-50 p-2 bg-green-500 rounded-full transform active:scale-95">
        <a
          href="https://api.whatsapp.com/send?phone=+51961352833&amp;text=Hola, necesito%20más%20información%20quiero%20comunicarme%20con un asesor!"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp className="text-5xl text-white animate-blink" />
        </a>
      </div>
    </>
  );
};
