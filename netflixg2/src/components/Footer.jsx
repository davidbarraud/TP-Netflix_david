import Dropdown from 'react-bootstrap/Dropdown';
import { TbWorld } from 'react-icons/tb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <Container className={`${styles.layoutItem} ${styles.background}`}>
      <Row className='mx-3'>
        <Col md="auto">
          <p>¿Preguntas? Llama al 0800 345 1593</p>

        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <ul>
            <li><a href='#'>Preguntas frecuentes</a></li>
            <li><a href='#'>Centro de ayuda</a></li>
            <li><a href='#'>Términos de uso</a></li>
           <li> <a href='#'>Privacidad</a></li>
            <li><a href='#'>Preferencia de cookies</a></li>
          </ul>
        </Col>
        <Col md="auto">
          <ul>
            <li><a href='#'>Información corporativa</a></li>
            <li><a href='#'>Prensa</a></li>
            <li><a href='#'>Formas de ver</a></li>
            <li><a href='#'>Prueba de velocidad</a></li>
            <li><a href='#'>Relaciones con inversionistas</a></li>
          </ul>
        </Col>
        <Col md="auto">
          <li><a href='#'>Avisos legales</a></li>
          <li><a href='#'>Cuenta</a></li>
          <li><a href='#'>Empleo</a></li>
          <li> <a href='#'>Contáctanos</a></li>
          <li><a href='#'>Sólo en RecFlix</a></li>
        </Col>
      </Row>
      <Row className="btn-dropdown mx-3">
        <Col md="auto">
          <Dropdown>
            <Dropdown.Toggle variant="bg-dark border-secondary text-light" id="dropdown-autoclose-true">
              <TbWorld /> Español
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
              <Dropdown.Item href="#/action-1">Español</Dropdown.Item>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className='mx-3 mt-3'>
        <Col md="auto">
          <p>Recflix Argentina</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer