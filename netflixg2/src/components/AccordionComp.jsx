import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import { BsPlusLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const BasicExample = () => {
  return (
    <Container className='m-0 p-0'>
      <Accordion defaultActiveKey="0"  >
        <Accordion.Item eventKey="1" >
          <Accordion.Header>¿Qué es RecFlix?</Accordion.Header>
          <Accordion.Body>
            Recflix es un servicio de streaming que ofrece una gran variedad de películas,
            series y documentales premiados en casi cualquier pantalla conectada a internet.
            Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible.
            Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Cuánto Cuesta Recflix?</Accordion.Header>
          <Accordion.Body>
            Disfruta Recflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming,
            todo por una tarifa plana mensual. Planes desde $ 999 hasta $ 2.399 al mes
            (sin impuestos incluidos). Sin costos adicionales ni contratos.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Dónde puedo ver Recflix?</Accordion.Header>
          <Accordion.Body>
            Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Recflix para ver contenido
            al instante a través de Recflix.com desde tu computadora personal o en cualquier dispositivo
            con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets,
            reproductores multimedia y consolas de juegos.
            Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10.
            Con la función de descarga, puedes ver donde vayas y sin conexión a internet.
            Lleva Recflix contigo adonde sea.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>¿Cómo Cancelo?</Accordion.Header>
          <Accordion.Body>
            Netflix es flexible. Sin contratos molestos ni compromisos.
            Cancela la membresía online con solo dos clics. No hay cargos por cancelación.
            Empieza y termina cuando quieras.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>¿Qué puedo ver en Recflix?</Accordion.Header>
          <Accordion.Body>
            Netflix tiene un amplio catálogo de películas, series, documentales, animes,
            originales premiados y más. Todo lo que quieras ver, cuando quieras.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>¿Es bueno Recflix para los niños?</Accordion.Header>
          <Accordion.Body>
            La experiencia de Netflix para niños está incluida en la membresía para que los padres
            tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.
            Los perfiles para niños incluyen controles parentales protegidos por PIN que
            te permiten restringir el contenido que pueden ver los niños en función de la clasificación
            por edad y bloquear determinados títulos que no quieras que los niños vean.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </Container> 
  );
}

export default BasicExample;