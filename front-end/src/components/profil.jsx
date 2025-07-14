import france from '../assets/image/france.png';
import englaise from '../assets/image/englaise.png';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBirthdayCake, FaGlobe, FaUserGraduate, FaCode } from 'react-icons/fa';
import { Row, Col, Button, Image } from 'react-bootstrap';
import styles from '../assets/css/profil.module.css';
import { Link } from 'react-router-dom';

export default function Profil() {
  return (
    <>
      <section className={`${styles.profilContainer} h-100 m-0`}>
        <Row className="justify-content-center mb-2">
          <p className=" gap-2">
            <FaUserGraduate /> 
            <b className="text-black fw-bold">Doha Choukri</b>
          </p>
        </Row>

        <Row className="justify-content-center mb-2">
          <p><FaCode /> <b className="text-black">Développeuse Web Full Stack</b></p>
        </Row>

        <Row className="justify-content-center mb-2">
          <p><FaBirthdayCake /> <b className="text-black">20 ans</b></p>
        </Row>

        <Row className="justify-content-center mb-2">
          <p><FaPhone /> <b className="text-black">06 17 61 21 91</b></p>
        </Row>

        <Row className="justify-content-center mb-2">
          <p><FaMapMarkerAlt /> <b className="text-black">Casablanca, Maroc</b></p>
        </Row>

        <Row>
          <p className="text-center fs-5">
            <a href="mailto:dohachoukri116@gmail.com" className="mx-2 "><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/doha-choukri-116/" target="_blank" rel="noopener noreferrer" className="mx-2 "><FaLinkedin /></a>
            <a href="https://github.com/DohaChoukri" target="_blank" rel="noopener noreferrer" className="mx-2 "><FaGithub /></a>
          </p>
        </Row>

        <Row className="text-center">
          <Link to="/contact">
            <Button variant="danger" className="aboutBtn px-4">
              Contactez-moi
            </Button>
          </Link>
        </Row>
      </section>
    </>
  );
}
