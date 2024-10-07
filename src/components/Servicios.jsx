import React from 'react';

// Nuevas imágenes que puedes reemplazar más adelante
import img1 from '../assets/Proyectos.jpg';
import img2 from '../assets/Precios.jpg';
import img3 from '../assets/Experiencia.jpg';
import img4 from '../assets/Calidad.jpg';

const serviciosData = [
  {
    title: "Proyectos",
    description: "Desarrollamos soluciones tecnológicas a la medida, adaptadas a las necesidades específicas de cada cliente, abarcando desde la planificación hasta la implementación exitosa de proyectos innovadores.",
    image: img1
  },
  {
    title: "Mejores Precios",
    description: "Ofrecemos una excelente relación calidad-precio, garantizando soluciones tecnológicas de alto rendimiento al mejor costo del mercado, sin comprometer la calidad ni la seguridad.",
    image: img2
  },
  {
    title: "Experiencia",
    description: "Con más de 15 años de trayectoria, nuestro equipo de expertos ha liderado proyectos en diversas industrias, brindando un conocimiento profundo y una ejecución precisa.",
    image: img3
  },
  {
    title: "Calidad",
    description: "Nos enfocamos en la excelencia en cada fase de nuestros proyectos, asegurando que nuestras soluciones no solo cumplan, sino que superen los más altos estándares de calidad y satisfacción.",
    image: img4
  }
];

const Servicios = () => {
  return (
    <section className="bg-gray-100 py-12" id="nuestros-servicios">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 mt-20">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviciosData.map((servicio, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <img
                  src={servicio.image}
                  alt={servicio.title}
                  className="mx-auto object-cover w-50 h-50"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{servicio.title}</h3>
              <p className="text-black mb-4 text-left">{servicio.description}</p> {/* Alineación a la izquierda */} 
              <a
                href="#"
                className="text-blue-500 font-medium hover:underline"
              >
                {servicio.linkText}
              </a>
            </div>
          ))}
        </div>

        {/* Otros servicios (ahora responsivo) */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Otros Servicios:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-full md:max-w-3xl mx-auto md:mx-0 text-left px-4 md:px-0">
            <li>Soluciones de Continuidad para Infraestructuras Críticas</li>
            <li>Desarrollo de Bases de Datos de Alto Rendimiento</li>
            <li>Sistemas de Seguridad de Datos</li>
            <li>Asesoría en Transformación Digital</li>
            <li>Optimización de Procesos Empresariales</li>
            <li>Proyectos de Inteligencia Artificial Aplicada</li>
            <li>Implementación de Sistemas de Ciberseguridad</li>
            <li>Desarrollo de Plataformas de Comercio Electrónico</li>
            <li>Automatización de Procesos en Sectores de Logística y Telecomunicaciones</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
