import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaLaravel, FaGitAlt, FaGithub, FaCode, FaPhp
} from "react-icons/fa";
import {
  SiTypescript, SiMysql, SiBootstrap, SiMongodb, SiRedux, SiTailwindcss, SiPostman, SiFigma, SiJira, SiWordpress, SiWoocommerce
} from "react-icons/si";
import { BiServer } from "react-icons/bi";
import { useTrad } from './getTrad';
import { useLanguage } from '../context/LanguageContext';

function Services() {
  const { lang } = useLanguage();
  const trad = useTrad(lang);
  
  if (!trad) return null;
  
  const tradData = trad[0] || {};

  const services = [
    {
      title: tradData.Services?.backend || "Développement Backend",
      skills: [
        { id: 1, name: "PHP", icon: <FaPhp />, color: "#777BB4" },
        { id: 2, name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
        { id: 3, name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
      ]
    },
    {
      title: tradData.Services?.frontend || "Développement Frontend",
      skills: [
        { id: 1, name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
        { id: 2, name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
        { id: 3, name: "JavaScript", icon: <FaJs />, color: "#F0DB4F" },
        { id: 5, name: "React", icon: <FaReact />, color: "#61DAFB" },
        { id: 7, name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
        { id: 9, name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      ]
    },
    {
      title: tradData.Services?.database || "Conception de Bases de Données",
      skills: [
        { id: 1, name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { id: 2, name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ]
    },
    {
      title: tradData.Services?.tools || "Outils",
      skills: [
        { id: 1, name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { id: 2, name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { id: 3, name: "VS Code", icon: <FaCode />, color: "#007ACC" },
        { id: 4, name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { id: 5, name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { id: 6, name: "Jira", icon: <SiJira />, color: "#0052CC" },
        { id: 7, name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
      ]
    }
  ];

  return (
    <section id='services' className="services-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">{tradData.Services?.title || "Mes Services"}</h2>
        <Row>
          {services.map((service, idx) => (
            <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
              <div className='text-center bg-white h-100 shadow text-dark p-4 rounded'>
                <h3 className='card-title mb-3'>{service.title}</h3>
                <ul className='list-unstyled'>
                  {service.skills.map(skill => (
                    <li key={skill.id} className='d-flex align-items-center mb-1'>
                      <span className='icon me-2' style={{ color: skill.color, fontSize: "1.5rem" }}>{skill.icon}</span>
                      <span className='skill-name'>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
export default Services;
