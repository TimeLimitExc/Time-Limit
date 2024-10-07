import React from 'react';
import logo from '../assets/logo2.png'; 

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="wrapper py-20">
        
        {/* Sección superior */}
        <section className="flex flex-col text-center gap-6 border-b-2 border-slate-400 pb-8 px-8 md:flex-row md:justify-between md:items-center md:pb-10">
          <a href="/">
            <img 
              src={logo} 
              alt="Logo Time Limit" 
              className="w-20 h-20" 
            />
          </a>
          <p className="text-slate-600">time.limit.exc@gmail.com</p>
        </section>

        {/* Sección inferior con 3 columnas */}
        <section className="flex flex-col gap-6 pt-8 px-8 md:flex-row md:justify-between md:pt-10">
          
          {/* Acerca de nosotros */}
          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-900">Acerca de nosotros</h3>
            <p className="text-slate-600 mt-4">
              Empresa dedicada a la implementación de soluciones tecnológicas personalizadas para nuestros clientes.
            </p>
          </div>

          {/* Servicios */}
          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-900">Nuestros Servicios</h3>
            <ul className="mt-4 text-slate-600">
              <li>Implementación de Sistemas de Ciberseguridad</li>
              <li>Desarrollo de Soluciones TI</li>
              <li>Automatización de Procesos</li>
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

          {/* Contacto */}
          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-900">Contacto</h3>
            <p className="text-slate-600 mt-4">Teléfono: +569 844 49 392</p>
            <p className="text-slate-600">Ubicación: Valparaiso, Chile</p>
          </div>
        </section>

        {/* Links rápidos y redes sociales */}
        <section className="flex flex-col px-8 text-center gap-6 pt-8 md:flex-row md:justify-between md:items-center md:pt-10">
          <div className="flex justify-center gap-4 text-slate-900">
            <a href="#informacion">Inicio</a>
            <a href="#quienes-somos">Acerca de</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#nuestros-servicios">Nuestros Servicios</a>
          </div>
          <p>© 2024 TimeLimit. All Rights Reserved</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
