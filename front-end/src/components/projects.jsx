import { Container, Row, Col, Card } from 'react-bootstrap';
import game from '../assets/image/game.png';
import nouvlair from '../assets/image/nouvlair.png';
import dhCosmetiques from '../assets/image/dh_Cosmetiques.png';
import { useTrad } from './getTrad';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const { lang } = useLanguage();
  const trad = useTrad(lang);
  
  if (!trad) return null;
  
  const tradData = trad[0] || {};

  const projects = [
    {
      title: tradData.Projects?.list?.[0]?.title || "Plateforme Interactive d'Apprentissage",
      image: nouvlair,
      description: tradData.Projects?.list?.[0]?.description || "Application web éducative permettant aux enseignants de créer des cours, des groupes et des questions. Les étudiants peuvent suivre leur progression et acquérir des compétences. Technologies : React, Laravel API.",
      lien:"", //http://localhost:3000/
    },
    {
      title: tradData.Projects?.list?.[1]?.title || "Site e-commerce DHCos",
      image: dhCosmetiques,
      description: tradData.Projects?.list?.[1]?.description || "Boutique en ligne dédiée aux cosmétiques naturels réalisée avec Odoo.",
      lien:"", //http://localhost:8069/
    },
    {
      title: tradData.Projects?.list?.[2]?.title || "Jeu éducatif Game Math",
      image: game,
      description: tradData.Projects?.list?.[2]?.description || "Jeu éducatif pour renforcer les compétences en mathématiques des enfants. Technologies : HTML5, CSS3, JavaScript.",
      lien:"",
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">{tradData.Projects?.title || "Mes projets"}</h2>
        <Row>
          {projects.map((project, idx) => (
              <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
                <a href={project.lien} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <div className="clickable-card text-center bg-white h-100 shadow text-dark p-4 rounded">
                    <img src={project.image} alt={project.title} className="img-fluid mb-3" />
                    <h3 className="card-title mb-4">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </a>
              </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
export default Projects;
