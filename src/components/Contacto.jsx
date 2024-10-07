import React from 'react';

const Contacto = () => {
  return (
    <section className="wrapper py-20 px-20 grid gap-12 auto-cols-fr items-center md:grid-flow-col" id="contacto">
      <div>
        <h2 className="text-3xl font-bold">Escribe un correo, y te contactaremos a la brevedad.</h2>
      </div>
      <form
        action="https://formspree.io/f/myzygdza" // Cambia esto por tu Formspree URL
        method="POST"
        className="grid gap-6"
      >
        <input
          type="email"
          name="email"
          placeholder="Escribe tú correo aquí (example@correo.com)"
          className="border border-slate-900 p-4 rounded-lg mt-10"
          required
        />
        <textarea
          name="message"
          placeholder="Escribe tú mensaje aquí..."
          className="border border-slate-900 p-4 rounded-lg"
          rows="4"
          required
        />
        <input
          type="submit"
          value="¡Contáctame!"
          className="bg-slate-700 text-white py-4 px-10 rounded-lg transform transition-transform duration-200 hover:scale-105" // Añade las clases de animación
        />
      </form>

      <div className="flex flex-col mt-8">
        <h3 className="text-xl font-semibold">O contáctanos directamente:</h3>
        <a
          href="https://wa.me/56984449392" // Cambia este número por el número de WhatsApp de Time Limit
          className="mt-2"
        >
          <button className="bg-green-500 text-white py-4 px-10 rounded-lg transform transition-transform duration-200 hover:scale-105"> {/* Añade las clases de animación */}
            Enviar mensaje por WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contacto;
