import { Container, Row, Col, Button } from "react-bootstrap";
import photo from "../assets/image/photo.png";
import { useTrad } from './getTrad';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();
  const trad = useTrad(lang);
  
  if (!trad) return null;
  
  const tradData = trad[0] || {};

  return (
    <section id="home" className="home-section">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="text-white text-col">
            <p className="home-hello mb-2"><i>{tradData.Accueil?.text || "BONJOUR !"}</i></p>
            <h1 className="home-title mb-3">{tradData.Accueil?.h1 || "Développeuse Web Full Stack"}</h1>
            <p className="home-desc text-black mb-4">
              {tradData.Accueil?.p1 || "je conçois des applications modernes et centrées sur l'utilisateur. Curieuse et rigoureuse, je m'adapte aux évolutions technologiques pour proposer des solutions pertinentes."}
            </p>
            <Button
              className="home-btn btn-danger"
              href="https://www.linkedin.com/in/doha-choukri-0a6a50330/"
              target="_blank"
            >
              {tradData.Accueil?.button || "Voir le profil LinkedIn"}
            </Button>
          </Col>
          <Col md={5} className="text-center">
            <img
              src={photo}
              alt="Doha Choukri"
              className="home-photo"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
