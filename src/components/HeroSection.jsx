import React from 'react';
import logo from '../assets/logo-tech-nova.png';

const HeroSection = () => {
  return (
    <section
      className="text-white d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(to bottom right, #2E3B4E, #1C1F26)',
        minHeight: '90vh',
        width: '100%',
        fontFamily: "'Source Code Pro', monospace",
      }}
    >
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 px-4">
        {/* Texto limitado y centrado */}
        <div className="text-center text-md-start" style={{ maxWidth: '600px' }}>
          <h1 className="mb-4">¡Creamos tu web!</h1>
          <p className="lead">
            Soy desarrollador full stack y en este espacio la creatividad se fusiona con la tecnología.
            <br />
            Diseñamos experiencias digitales que no solo se ven increíbles, ¡sino que funcionan como un reloj suizo!
            <br />
            Ya sea que necesites una web impactante, una app ágil o una solución a medida, estás en el lugar indicado.
            <br />
            <strong className="text-success">Innovación digital que transforma tu mundo. 🚀</strong>
          </p>
        </div>

        {/* Imagen centrada con margen a la izquierda */}
        <div className="text-center ms-md-5">
          <img
            src={logo}
            alt="TechNova Studio"
            style={{ width: '400px', maxWidth: '100%' }}
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
