import { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../assets/image/photo1.png';
import { useTrad } from './getTrad';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const { lang, changeLanguage } = useLanguage();
  const trad = useTrad(lang);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const tradData = trad && trad[0] ? trad[0] : {};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!trad) {
    return <header />; 
  }

  return (
    <Navbar 
      ref={navbarRef}
      expand="lg" 
      sticky="top" 
      className="custom-navbar" 
      expanded={expanded}
    >
      <Container className='mt-2 mb-2'>
        <Link to="/" className="text-decoration-none d-flex align-items-center gap-2" onClick={() => setExpanded(false)}>
          <div className="d-flex align-items-center  header-profile">
            <div className="profile-img-wrapper mx-2">
              <img src={img} alt="Profil" className="profile-img" />
            </div>
          
          <p
            className="fw-bold fs-5 text-white mb-0"
          >
            Doha Choukri
          </p></div>
        </Link>
        <Navbar.Toggle 
          aria-controls="main-navbar" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>{tradData.header?.home || "Accueil"}</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>{tradData.header?.about || "À propos"}</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>{tradData.header?.services || "Services"}</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>{tradData.header?.projects || "Projets"}</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>{tradData.header?.contact || "Contactez-moi"}</Nav.Link>
            <Nav.Link onClick={() => { changeLanguage('fr'); setExpanded(false); }}>
              <p className="d-flex align-items-center gap-2">
                <span className="fi fi-fr fis"></span>
                <b>FR</b>
              </p>
            </Nav.Link>
            <Nav.Link onClick={() => { changeLanguage('en'); setExpanded(false); }}>
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
