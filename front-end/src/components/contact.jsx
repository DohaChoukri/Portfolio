import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBirthdayCake, FaGlobe, FaUserGraduate, FaCode } from 'react-icons/fa';
import { useTrad } from './getTrad';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const { lang } = useLanguage();
  const trad = useTrad(lang);
  
  if (!trad) return null;
  
  const tradData = trad[0] || {};

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(tradData.Contact?.sending || 'Envoi en cours...');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus(tradData.Contact?.success || 'Message envoyé avec succès !');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(`${tradData.Contact?.error || 'Erreur : '}${data.error}`);
      }
    } catch (error) {
      setStatus(tradData.Contact?.server_error || 'Erreur serveur, réessayez plus tard.');
    }
  };
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">{tradData.Contact?.title || "Contactez-moi"}</h2>
        <Row>
          <Col md={4}>
              <p className=" gap-2"><FaUserGraduate /><b className="text-black fw-bold">{tradData.Contact?.name || "Doha Choukri"}</b></p>
              <p><FaCode /> <b className="text-black">{tradData.Contact?.job || "Développeuse Web Full Stack"}</b></p>
              <p><FaBirthdayCake /> <b className="text-black">{tradData.Contact?.age || "20 ans"}</b></p>
              <p><FaPhone /> <b className="text-black">{tradData.Contact?.phone || "06 17 61 21 91"}</b></p>            
              <p><FaMapMarkerAlt /> <b className="text-black">{tradData.Contact?.location || "Casablanca, Maroc"}</b></p>
              <p className="text-center fs-5">
                <a href="mailto:dohachoukri014@gmail.com" className="mx-2 "><FaEnvelope /></a>
                <a href="https://www.linkedin.com/in/doha-choukri-116/" target="_blank" rel="noopener noreferrer" className="mx-2 "><FaLinkedin /></a>
                <a href="https://github.com/DohaChoukri" target="_blank" rel="noopener noreferrer" className="mx-2 "><FaGithub /></a>
              </p>
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder={tradData.Contact?.form_name || "Entrez votre nom"}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder={tradData.Contact?.form_email || "Entrez l'adresse email"}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder={tradData.Contact?.form_message || "Entrez votre message"}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="danger" type="submit">{tradData.Contact?.button || "Contactez-moi"}</Button>
            </Form>
            {status && <p className="mt-3">{status}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
