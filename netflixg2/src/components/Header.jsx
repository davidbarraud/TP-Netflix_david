import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbWorld } from 'react-icons/tb';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Header.module.css';


const Header = () => {
  return (
    <Navbar className={`${styles.navbar}`}>
      <Container>
        <div className='d-flex justify-content-start'>
        <Navbar.Brand>
          <img
            src="/../images/logo.png"
            width="168"
            height="60"
            className="LogoImg"
            alt="RecFlix logo"
          />
        </Navbar.Brand>
        </div>
        <div className='d-flex justify-content-end'>
          <Row className="btn-dropdown">
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
          <Row className='mx-2'>
            <Col md="auto">
              <Button variant="danger">Iniciar sesión</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header