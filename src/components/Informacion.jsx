import React from 'react';
import work from '../assets/work.jpg'; // Ajusta la ruta según sea necesario
import bgImage from '../assets/bg-tech.jpg'; // Imagen de fondo representando tecnología

const Informacion = () => {
  return (
    <section 
      className="relative text-white pt-32 px-14 pb-14 flex flex-col md:flex-row items-center bg-cover bg-center"
      id="informacion"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:space-x-8">
        <img 
          src={work} 
          className="max-w-lg w-full md:w-2/5 mb-8 md:mb-0 rounded-lg" 
          alt="Hero" 
        />
        
        <div className="text-white space-y-6 text-center md:w-3/5 md:text-left">
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Impulsamos tus soluciones tecnológicas
          </h1>
          <p className="font-extrabold">
            Transformamos tus ideas en software eficiente, seguro e innovador, adaptado a tus necesidades
          </p>

          {/* Centro el botón en dispositivos móviles */}
          <div className="flex justify-center md:justify-end"> 
            <a 
              href="#contacto"
              className="inline-block bg-slate-700 py-4 px-8 rounded-xl font-bold relative overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105" // Añadido: animación de zoom
            >
              <span className="relative z-10">¡Contáctanos Ahora!</span>
              <div className="absolute inset-0 bg-slate-700 transform scale-0 transition-transform duration-500 ease-out group-hover:scale-100"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Informacion;
