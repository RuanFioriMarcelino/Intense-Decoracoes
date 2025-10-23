import "./style/App.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const BrandLogo = () => (
    <div className="flex items-center gap-2 ">
      <div className="w-6 h-6 bg-white md:bg-vinho-200 rounded-full"></div>
      <h2 className="text-xl font-bold text-white md:text-vinho-200">
        INTENSE
        <span className="font-light block text-xs -mt-1">MODA FEMININA</span>
      </h2>
    </div>
  );

  return (
    <>
      <div className="min-h-screen flex flex-col font-sans bg-nude-200">
        <nav className="flex items-center  justify-between  gap-8 p-4 bg-vinho-200 md:bg-nude-200 w-full shadow">
          <BrandLogo />
          <button
            className="md:hidden text-white md:text-vinho-200 p-2 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <ul className="hidden md:flex gap-8 text-vinho-200 font-medium text-lg  uppercase">
            <li>
              <a
                href="#"
                className="hover:text-vinho-200 text-white  transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-vinho-200 text-white  transition"
              >
                Produto
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-vinho-200 text-white transition"
              >
                Loja
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`md:hidden transition-all duration-300  overflow-hidden ${
            isMenuOpen ? "max-h-60 opacity-100 " : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2  bg-vinho-200 border-t border-gray-100 text-white font-medium uppercase px-4">
            <li className="p-2 border-b border-gray-100">
              <a href="#" className="block hover:text-white">
                Home
              </a>
            </li>
            <li className="p-2 border-b border-gray-100">
              <a href="#" className="block hover:text-white">
                Produto
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="block hover:text-white">
                Loja
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col md:flex-row relative mt-20 ml-20">
          <div className="top-25 -left-10 md:-left-15 absolute ">
            <h3 className="-rotate-90 font-extralight text-white text-3xl md:text-5xl">
              FEMININA
            </h3>
          </div>

          <div className="ml-10 md:ml-20 pt-10 md:pt-0">
            <h1 className="text-6xl md:text-8xl font-extralight text-white leading-18 md:leading-[1.1]">
              INTENSE
            </h1>
            <h1 className="text-7xl md:text-9xl font-extrabold text-vinho-200 leading-20 md:leading-32">
              MODA
            </h1>
          </div>
        </div>

        <footer className="flex flex-col gap-4 w-min absolute bottom-20 left-30">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1 rounded-full border-2 border-white group-hover:bg-white transition">
              <ArrowForwardIcon
                className="text-white group-hover:text-vinho-200 transition"
                style={{ fontSize: 24 }}
              />
            </div>
            <p className="text-xl md:text-3xl uppercase text-white font-medium group-hover:text-vinho-200 transition  whitespace-nowrap">
              ver mais
            </p>
          </a>

          {/* Social Icons */}
          <div className="flex justify-between">
            <span className="bg-white hover:bg-vinho-200  rounded-full flex  items-center p-2 cursor-pointer">
              <InstagramIcon />
            </span>
            <span className="bg-white hover:bg-vinho-200  rounded-full flex  items-center p-2 cursor-pointer">
              <FacebookIcon />
            </span>
            <span className="bg-white hover:bg-vinho-200 rounded-full flex  items-center p-2 cursor-pointer">
              <WhatsAppIcon />
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
