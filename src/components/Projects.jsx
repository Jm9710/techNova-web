const projectsData = [
  {
    id: 1,
    title: "Agenda y gestor de Trabajos",
    description: "App Web para gestionar trabajos, contabilidad y clientes. Desarrollada con React, Python y Postgres.",
    imageUrl: "https://res.cloudinary.com/dorhlnwn1/image/upload/v1747844369/2_kniz6g.png",
  },
  // Podés agregar más proyectos aquí
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>
        <p className="text-muted mb-5">Colección de trabajos realizados para clientes.</p>

        <div className="row">
          {projectsData.map(({ id, title, description, imageUrl }) => (
            <div key={id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 custom-shadow">

                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text flex-grow-1">{description}</p>
                  {/* Si querés botones o links, acá van */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
