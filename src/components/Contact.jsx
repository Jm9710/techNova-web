const ContactForm = () => {
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
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Nombre" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" placeholder="Teléfono" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Asunto / Tipo de proyecto" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Mensaje / Detalles del proyecto"></textarea>
            </div>
            <div className="mb-3">
              <select className="form-select">
                <option>Prefiero que me contactes por:</option>
                <option>Whatsapp</option>
                <option>Email</option>
              </select>
            </div>
            <button className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  