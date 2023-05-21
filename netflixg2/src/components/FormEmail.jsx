import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RxCaretRight } from 'react-icons/rx';
import styles from '../styles/FormEmail.module.css';


function InputForm({ type, placeholder, className }) {
    return (
        <Form.Control
            type={type}
            placeholder={placeholder}
            className={className}
        >
        </Form.Control>
    )
}

const FormEmail = () => {
    return (
        <div className={`${styles.FormEmail}`}>
            <Container className='m-0 p-0'>
                <Row className='mt-3 mb-3'>
                    <Col md={12} lg={10}>
                        <h3>
                            ¿Quieres ver RecFlix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de RecFlix.
                        </h3>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col xs={6} md={8} lg={8}>
                        <Form className='d-flex grid gap-2'>
                            <InputForm type="text" placeholder="text" className='bg-dark fw-normal rounded-1 border border-danger text-light'
                            ></InputForm>
                            <Button variant="danger rounded-1" type="submit" className='d-inline-flex p-3'>
                                Comenzar <div aria-hidden="true"><RxCaretRight /></div>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FormEmail