import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../assets/image/photo.png';
import { useTrad } from './getTrad';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const { lang, changeLanguage } = useLanguage();
  const trad = useTrad(lang);
  console.log(trad)

  if (!trad) return null; 
  
  const tradData = trad[0] || {};

  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container className=' mt-2'>
         <img src={img} id="img1" alt="Doha Choukri" />
          <p
            style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem' }}
            className="navbar-brand"
          >
            DoHa chOukri
          </p>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">{tradData.header?.home || "Accueil"}</Nav.Link>
              <Nav.Link as={Link} to="/about">{tradData.header?.about || "À propos"}</Nav.Link>
              <Nav.Link as={Link} to="/services">{tradData.header?.services || "Services"}</Nav.Link>
              <Nav.Link as={Link} to="/projects">{tradData.header?.projects || "Projets"}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{tradData.header?.contact || "Contactez-moi"}</Nav.Link>
              <Nav.Link onClick={() => changeLanguage('fr')}>
                <p className="d-flex align-items-center gap-2">
                  <span className="fi fi-fr fis"></span>
                  <b>FR</b>
                </p>
              </Nav.Link>
              <Nav.Link onClick={() => changeLanguage('en')}>
                <p className="d-flex align-items-center gap-2">
                  <span className="fi fi-gb fis"></span>
                  <b>EN</b>
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
