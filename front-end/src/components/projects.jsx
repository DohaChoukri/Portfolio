import { Container, Row, Col } from 'react-bootstrap';
import { useTrad } from './getTrad';
import { useLanguage } from '../context/LanguageContext';
import game from '../assets/image/game.png';
import nouvlair from '../assets/image/nouvlair.png';
import dhCosmetiques from '../assets/image/dh_Cosmetiques.png';

function Projects() {
  const { lang } = useLanguage();
  const trad = useTrad(lang);
  
  if (!trad) return null;
  
  const tradData = trad[0] || {};

  const projetsList = () => {
    const list = tradData.Projects?.list || [];
    const images = [nouvlair, dhCosmetiques, game];
    const videos = [
      "https://drive.google.com/file/d/1iq1k_GwmEFgMAENIzJQBtMSvF06OgDez/view?usp=drive_link", // NouvlairVideo
      "https://drive.google.com/file/d/1yB6TVl1krDHUTSFti817MVvbY60r3QGJ/view?usp=drive_link", // dhCosmetiquesVideo
      "https://drive.google.com/file/d/1IsxuKET9toHMSf5ispFQ91TAB0FQj683/view?usp=drive_link"  // MathGameVideo
    ];

    return list.map((project, idx) => (
      <Col xl={4} lg={6} md={6} sm={12} xs={12} key={idx} className="mb-4">
        <div className="card h-100 border-0 shadow-sm p-3 text-white" style={{ backgroundColor: "#355070" }}>
          <img
            src={images[idx]}
            alt={project.title}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center mb-3">{project.title}</h5>
            <p className="card-text text-center mb-4">{project.description}</p>

            <div className="mb-3">
              <strong>Technologies: </strong>
              {(Array.isArray(project.Technologies)
                ? project.Technologies
                : [project.Technologies]
              ).map((tech, index) => (
                <span key={index} className="badge bg-primary me-1 mb-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto text-center">
              <a href={videos[idx]} className="btn btn-outline-light rounded-pill px-4 mx-2">
                {project.p_Lien}
              </a>
            </div>
          </div>
        </div>
      </Col>
    ));
  };


  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">{tradData.Projects?.title || "Mes projets"}</h2>
        <Row>
          {projetsList()}
        </Row>
      </Container>
    </section>
  );
}
export default Projects;
