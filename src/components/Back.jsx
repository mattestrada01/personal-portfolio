import React from "react";
import { SectionWrapper } from "../hoc";

const Back = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <button
        onClick={scrollToTop}
        className="absolute left-1/2 transform -translate-x-1/2 
                  bg-transparent border-2 border-cyan-500 text-cyan-500 
                  text-xl p-2 rounded-2xl shadow-lg
                  hover:bg-cyan-600 hover:text-white transition-colors duration-300 ease-in-out
                  bottom-16"
        aria-label="Home"
      >
        Home
      </button>
      <p className="text-cyan-500 text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} Designed by M.E. 
      </p>
    </div>
  );
};

export default SectionWrapper(Back, "");
