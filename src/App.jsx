import React from 'react';
import Header from './components/Header';
import QuienesSomos from './components/QuienesSomos';
import Informacion from './components/Informacion';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Informacion />
        <QuienesSomos />
        <Proyectos />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
