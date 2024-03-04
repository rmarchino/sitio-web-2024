import "./scrollup.css";
import { FaArrowCircleUp } from "react-icons/fa";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  });

  return (
    <>
      <a
        href="#"
        className="scrollup bg-black hover:bg-gray-800 p-4 transition-all"
      >
        <FaArrowCircleUp className="text-2xl text-white scrollup__icon" />
      </a>
    </>
  );
};

export default Scrollup;
