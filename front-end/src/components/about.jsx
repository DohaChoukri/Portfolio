import { Container, Row, Col, Button ,ProgressBar } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useTrad } from './getTrad';
import { useLanguage } from '../context/LanguageContext';
import { FaArrowUpFromBracket } from "react-icons/fa6";


const skills = [
  { name: "Html/Css/JavaScript", value: 80 },
  { name: "C", value: 65 },
  { name: "Python", value: 75 },
  { name: "ReactJs", value: 90 },
  { name: "PHP", value: 75 },
  { name: "Laravel", value: 85 },
  { name: "UI / UX Figma", value: 70 }
];

function About() {
  const { lang } = useLanguage();
  const trad = useTrad(lang);
  
  if (!trad) return null;
  
  const tradData = trad[0] || {};

  return (
    <section id="about" className='services-section py-5 '>
      <Container>
        <h2 className="section-title text-center mb-4">{tradData.About?.title || "À propos"}</h2>
        <Row className='bg-white h-100 shadow text-dark rounded p-3'>
            <Col md={6} lg={6}>
                <h3 className='card-title'>{tradData.About?.h3_1 || "Développeuse Web Full Stack"}</h3>
                <p className='mt-3'>
                  {tradData.About?.p1 || "Je conçois et développe des applications web de bout en bout, en combinant des interfaces modernes et intuitives avec des architectures backend solides et sécurisées."}
                </p>
                <p>
                  {tradData.About?.p2 || "De l'UX/UI design au développement d'API et à l'optimisation des bases de données, chaque projet est pensé pour offrir une expérience fluide, rapide et adaptée à tous les supports."}
                </p>
                <div className='text-center'>
                  <Button 
                    variant="danger" 
                    className="aboutBtn mx-2 text-decoration-none text-white bold"
                    onClick={() => {
                      window.open('/CV_Doha.pdf', '_blank');
                    }}
                  >
                    <FaArrowUpFromBracket /> {tradData.About?.button_cv || "CV"}
                  </Button>
                  <Link to="/contact">
                    <Button variant="danger" className="aboutBtn text-white bold">
                      {tradData.About?.button_contact || "Contactez-moi"}
                    </Button>
                  </Link>
                </div>
            </Col>
            <Col md={6} lg={6}>
              <h3 className="card-title">{tradData.About?.h3_2 || "Compétences"}</h3>
              {skills.map((skill, idx) => (
                <div key={idx} className="mb-1">
                  <div className="d-flex justify-content-between mb-1">
                    <span> </span>
                    <span>{skill.value}%</span>
                  </div>
                  <ProgressBar
                    now={skill.value}
                    variant="danger"
                    label={`${skill.name}`}
                    className="text-start progress-custom"
                  />
                </div>
              ))}
            </Col>
          </Row>
      </Container>
    </section>
  );
}

export default About;
