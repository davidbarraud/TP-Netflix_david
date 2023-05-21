import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormEmail from './FormEmail';
import styles from '../styles/BillboardBox.module.css';

const Hero = () => {
    return (
        <div className={`${styles.BillboardBox}`}>
            <Container>
                <Row>
                    <Col sm={12}  md={8} lg={8}>
                        <h1>Películas y series ilimitadas y mucho más</h1>
                        <p>Disfruta donde quieras. Cancela cuando quieras.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">
                        <FormEmail />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero