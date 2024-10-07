import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu(); // Cierra el menú después de hacer scroll
  };

  return (
    <header className="bg-indigo-900 opacity-90 fixed top-0 left-0 w-full z-50">
      <nav className="py-4 px-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <a href="/" onClick={() => scrollToSection("#home")} className="ml-2">
            <img src={logo} alt="Logo Time Limit" className="w-20 h-20" />
          </a>
        </div>

        <div className="hidden md:flex space-x-6 text-center flex-grow justify-center">
          <button onClick={() => scrollToSection("#informacion")} className="hover:text-neutral-950 transition-colors duration-200 ease-in-out text-lg">
            Inicio
          </button>
          <button onClick={() => scrollToSection("#quienes-somos")} className="hover:text-neutral-950 transition-colors duration-200 ease-in-out text-lg">
            ¿Quiénes Somos?
          </button>
          <button onClick={() => scrollToSection("#proyectos")} className="hover:text-neutral-950 transition-colors duration-200 ease-in-out text-lg">
            Proyectos
          </button>
          <button onClick={() => scrollToSection("#nuestros-servicios")} className="hover:text-neutral-950 transition-colors duration-200 ease-in-out text-lg">
            Nuestros Servicios
          </button>
          <button onClick={() => scrollToSection("#contacto")} className="hover:text-neutral-950 transition-colors duration-200 ease-in-out text-lg">
            Contacto
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-indigo-800 text-white flex flex-col items-start justify-start pt-12 pl-4 ${menuOpen ? 'flex' : 'hidden'}`}
      >
        <button onClick={closeMenu} className="mb-8 text-left">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button onClick={() => scrollToSection("#informacion")} className="block py-2 text-xl hover:text-neutral-950 transition-colors duration-200 ease-in-out flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Inicio
        </button>
        <button onClick={() => scrollToSection("#quienes-somos")} className="block py-2 text-xl hover:text-neutral-950 transition-colors duration-200 ease-in-out flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          ¿Quiénes Somos?
        </button>
        <button onClick={() => scrollToSection("#proyectos")} className="block py-2 text-xl hover:text-neutral-950 transition-colors duration-200 ease-in-out flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Proyectos
        </button>
        <button onClick={() => scrollToSection("#nuestros-servicios")} className="block py-2 text-xl hover:text-neutral-950 transition-colors duration-200 ease-in-out flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nuestros Servicios
        </button>
        <button onClick={() => scrollToSection("#contacto")} className="block py-2 text-xl hover:text-neutral-950 transition-colors duration-200 ease-in-out flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Contacto
        </button>
      </div>
    </header>
  );
};

export default Header;
