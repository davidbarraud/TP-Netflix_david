import Container from 'react-bootstrap/Container';
import styles from '../styles/CardImage.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CardImage(props){

return(
    <div className={`${styles.CardImage}`}>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <img src={props.src} alt={props.alt} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h3>{props.titulo} </h3>
                    <p>{props.cuerpo} </p>
                </Col>
            </Row>
        </Container>
        
    </div>
)

}