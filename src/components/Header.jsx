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
    const section = document.getElementById(id.replace('#', ''));
    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // Duración del desplazamiento en ms
      let startTime = null;

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(step); // Continuar hasta completar la animación
      };

      // Función de aceleración y desaceleración
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(step);
    }
    closeMenu(); // Cierra el menú después de hacer scroll
  };

  return (
    <header className="bg-indigo-900 fixed top-0 left-0 w-full z-50">
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
          {/* Botones del navbar con hover */}
          <button 
            onClick={() => scrollToSection("#informacion")} 
            className="text-lg relative group"
          >
            Inicio
            <span className="block h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection("#quienes-somos")} 
            className="text-lg relative group"
          >
            ¿Quiénes Somos?
            <span className="block h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection("#proyectos")} 
            className="text-lg relative group"
          >
            Proyectos
            <span className="block h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection("#nuestros-servicios")} 
            className="text-lg relative group"
          >
            Nuestros Servicios
            <span className="block h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection("#contacto")} 
            className="text-lg relative group"
          >
            Contacto
            <span className="block h-1 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
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
        <button onClick={() => scrollToSection("#informacion")} className="block py-2 text-xl">
          Inicio +
        </button>
        <button onClick={() => scrollToSection("#quienes-somos")} className="block py-2 text-xl">
          ¿Quiénes Somos? +
        </button>
        <button onClick={() => scrollToSection("#proyectos")} className="block py-2 text-xl">
          Proyectos +
        </button>
        <button onClick={() => scrollToSection("#nuestros-servicios")} className="block py-2 text-xl">
          Nuestros Servicios +
        </button>
        <button onClick={() => scrollToSection("#contacto")} className="block py-2 text-xl">
          Contacto +
        </button>
      </div>
    </header>
  );
};

export default Header;
