import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const skills = [
  { name: "Html/Css/JavaScript", value: 80 },
  { name: "Python", value: 65 },
  { name: "ReactJs", value: 90 },
  { name: "PHP", value: 75 },
  { name: "Laravel", value: 85 },
  { name: "UI / UX Figma", value: 70 }
];

function Resume() {
  return (
    <section id="resume" className="services-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Mes Résumé</h2>
        <Row>
          <Col md={6}>
            <div className='bg-white h-100  shadow text-dark p-4 rounded'>
                <h3 className='card-title'>Expérience</h3>
                <p className='card-text'>
                  <b>Nouvlair Platform</b><br />
                  Développement d’une plateforme d’apprentissage avec React js pour le frontend et Laravel API pour le backend.<br />
                  <br />
                  <b>Site e-commerce de cosmétiques naturels</b><br />
                  Création d’une boutique en ligne dédiée aux produits cosmétiques naturels via Gloo.
                </p>
            </div>
          </Col>
          <Col md={6}>
            <div className=' bg-white h-100  shadow p-4 rounded'>
                <h3 className='card-title'>Compétences</h3>
                {skills.map((skill, idx) => (
                  <div key={idx} className="mb-2">
                    <div className="d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <ProgressBar now={skill.value} variant="danger" />
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Resume;
