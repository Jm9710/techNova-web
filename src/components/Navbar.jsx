import React from "react";
import logo from "../assets/logo-solo.png"; // Asegurate de que la ruta sea correcta

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md fixed-top"
      style={{ backgroundColor: "#181C23" }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center text-white"
          href="#"
        >
          <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
        </a>

        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
