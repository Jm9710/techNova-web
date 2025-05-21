import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState(''); // '', 'SUCCESS', 'ERROR'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpwdneag', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section
      id="contacto"
      className="py-5"
      style={{
        background: 'linear-gradient(to bottom right, #2E3B4E, #1C1F26)',
        color: 'white',
      }}
    >
      <div className="container">
        <h4 className="mb-4 text-center">¿Listo para llevar tu proyecto al siguiente nivel?</h4>
        <p className="text-center mb-4">
          Completá el formulario y te respondo en breve.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <input name="nombre" type="text" className="form-control" placeholder="Nombre" required />
            </div>
            <div className="col-md-6">
              <input name="email" type="email" className="form-control" placeholder="Email" required />
            </div>
          </div>
          <div className="mb-3">
            <input name="telefono" type="tel" className="form-control" placeholder="Teléfono" />
          </div>
          <div className="mb-3">
            <input name="asunto" type="text" className="form-control" placeholder="Asunto / Tipo de proyecto" />
          </div>
          <div className="mb-3">
            <textarea name="mensaje" className="form-control" rows="4" placeholder="Mensaje / Detalles del proyecto" required></textarea>
          </div>
          <div className="mb-3">
            <select name="preferencia" className="form-select">
              <option value="">Prefiero que me contactes por:</option>
              <option value="whatsapp">Whatsapp</option>
              <option value="email">Email</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit" disabled={status === 'SUCCESS'}>
            {status === 'SUCCESS' ? '¡Enviado!' : 'Enviar'}
          </button>
        </form>

        {status === 'SUCCESS' && (
          <div className="alert alert-success mt-3" role="alert">
            ¡Gracias por tu consulta! Te responderé pronto.
          </div>
        )}
        {status === 'ERROR' && (
          <div className="alert alert-danger mt-3" role="alert">
            Ups, algo salió mal. Por favor, intentá nuevamente.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
