import React from 'react';
import Historia from '../assets/icons/book-regular-240.png';
import Equipo from '../assets/icons/body-regular-240.png';
import Agil from '../assets/icons/note-regular-240.png';
import Innovacion from '../assets/icons/universal-access-solid-240.png';
import Soporte from '../assets/icons/support-regular-240.png';
import Valores from '../assets/icons/hand-solid-240.png';

const QuienesSomos = () => {
  return (
    <section className="wrapper py-20 px-10 " id="quienes-somos">
      <h2 className="text-3xl font-bold md:text-4xl mb-12 text-center mt-12">¿Quiénes Somos?</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Tarjeta Historia */}
        <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:transform hover:scale-105 transition-transform duration-300 text-left">
          <div className="flex justify-start mb-6">
            <img src={Historia} alt="Historia" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Nuestra Historia</h3>
          <p className="text-stone-950">
            <strong>Time Limit</strong> es una empresa líder en desarrollo de software, fundada hace 15 años por estudiantes de la PUCV. Hemos evolucionado de un proyecto universitario a un referente en la industria tecnológica.
          </p>
        </div>

        {/* Tarjeta Equipo */}
        <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:transform hover:scale-105 transition-transform duration-300 text-left">
          <div className="flex justify-start mb-6">
            <img src={Equipo} alt="Equipo" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Nuestro Equipo</h3>
          <p className="text-stone-950">
            Contamos con un equipo altamente capacitado en áreas como desarrollo Frontend, Backend, Ciberseguridad e inteligencia artificial. Enfrentamos cada desafío con soluciones innovadoras.
          </p>
        </div>

        {/* Tarjeta Ágil */}
        <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:transform hover:scale-105 transition-transform duration-300 text-left">
          <div className="flex justify-start mb-6">
            <img src={Agil} alt="Metodología Ágil" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Metodología Ágil</h3>
          <p className="text-stone-950">
            Trabajamos de manera ágil, colaborando estrechamente con nuestros clientes para asegurar entregas a tiempo y dentro del presupuesto, siempre enfocados en sus necesidades específicas.
          </p>
        </div>

        {/* Tarjeta Innovación */}
        <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:transform hover:scale-105 transition-transform duration-300 text-left">
          <div className="flex justify-start mb-6">
            <img src={Innovacion} alt="Innovación y Sostenibilidad" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Innovación y Sostenibilidad</h3>
          <p className="text-stone-950">
            Adoptamos tecnologías avanzadas como la IA y la computación en la nube para preparar a nuestros clientes para el futuro. Nos comprometemos también con la sostenibilidad y la responsabilidad social.
          </p>
        </div>

        {/* Tarjeta Soporte */}
        <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:transform hover:scale-105 transition-transform duration-300 text-left">
          <div className="flex justify-start mb-6">
            <img src={Soporte} alt="Relaciones a Largo Plazo" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Relaciones a Largo Plazo</h3>
          <p className="text-stone-950">
            Ofrecemos soporte continuo, actualizaciones y mejoras, asegurando que nuestras soluciones sigan siendo efectivas conforme la tecnología evoluciona.
          </p>
        </div>

        {/* Tarjeta Valores */}
        <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:transform hover:scale-105 transition-transform duration-300 text-left">
          <div className="flex justify-start mb-6">
            <img src={Valores} alt="Valores" className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Nuestros Valores</h3>
          <p className="text-stone-950">
            Creemos en la transparencia, el compromiso y la innovación. Estos valores guían nuestras decisiones y nos permiten ofrecer soluciones de alta calidad a nuestros clientes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default QuienesSomos;
