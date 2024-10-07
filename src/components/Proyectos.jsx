import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Finanzas from '../assets/Finanzas.jpg';
import Comercio from '../assets/Comercio.jpg';
import Salud from '../assets/Salud.jpg';
import Educacion from '../assets/Educacion.jpg';
import Logistica from '../assets/Logistica.jpg';
import Datos from '../assets/Datos.jpg';

// Componente de flecha derecha personalizada
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 z-10"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

// Componente de flecha izquierda personalizada
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 z-10"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const Proyectos = () => {
  const settings = {
    dots: false, // Desactivar los puntos
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Usar el componente NextArrow para la flecha derecha
    prevArrow: <PrevArrow />, // Usar el componente PrevArrow para la flecha izquierda
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-slate-50 py-20" id="proyectos">
      <div className="wrapper text-center">
        <h2 className="text-3xl font-bold mb-6 md:text-4xl mt-10">¡Nuestro trabajo!</h2>
        <p className="font-light text-xl text-stone-950 w-2/3 mx-auto">
          A lo largo de los años, hemos colaborado en diferentes sectores para ofrecer soluciones tecnológicas innovadoras y personalizadas.
        </p>

        <div className="mt-12 px-10 relative">
          <Slider {...settings}>
            <ProjectCard 
              title="Sector Financiero" 
              imageSrc={Finanzas}
              description="Soluciones tecnológicas avanzadas, incluyendo plataformas de pago, sistemas de gestión de activos y herramientas de análisis financiero, con un gran enfoque en la seguridad e integridad de los datos."
            />
            <ProjectCard 
              title="Comercio Electrónico" 
              imageSrc={Comercio}
              description="Soluciones integrales para tiendas en línea, desde el desarrollo de plataformas de venta hasta la integración de pasarelas de pago, con un alto enfoque en la experiencia del usuario."
            />
            <ProjectCard 
              title="Salud" 
              imageSrc={Salud}
              description="Digitalización de procesos médicos, gestión de datos de pacientes y creación de aplicaciones para mejorar el acceso a los servicios de salud, cumpliendo con los estándares de privacidad y seguridad."
            />
            <ProjectCard 
              title="Educación" 
              imageSrc={Educacion}
              description="Desarrollo de plataformas de aprendizaje en línea y herramientas de gestión académica, diseñadas para mejorar la interacción entre estudiantes y profesores, siendo accesibles y escalables."
            />
            <ProjectCard 
              title="Logística" 
              imageSrc={Logistica}
              description="Soluciones para la gestión de suministros, optimización de rutas y seguimiento en tiempo real de envíos, mejorando la eficiencia, transparencia y reduciendo costos."
            />
            <ProjectCard 
              title="Telecomunicaciones" 
              imageSrc={Datos}
              description="Implementación de sistemas de gestión y análisis de grandes volúmenes de datos, asegurando alta conectividad y una correcta transmisión de la información."
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, imageSrc, description }) => {
  return (
    <article className="w-4/5 mx-auto space-y-4">
      <img src={imageSrc} className="aspect-square object-cover rounded-2xl" alt={title} />
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="text-black font-light">{description}</p> {/* Texto de la descripción en negro */}
    </article>
  );
};

export default Proyectos;
