import Header from './header';
import Profil from './profil';
import { Outlet } from 'react-router-dom';
// import s from '../assets/css/content.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Content() {
  return (
    <Container fluid >
      <Row>
        <Header  />
      </Row>
      <Row>
        {/* <Col md={3} sm={6}  className='m-0'>
          <aside>
            <Profil />
          </aside>
        </Col> */}
        <Col>
          <main>
            <Outlet />
          </main>
        </Col>
      </Row>
    </Container>
  );
}
