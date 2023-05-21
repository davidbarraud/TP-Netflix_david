import Header from '@/components/Header'
import BillboardBox from '@/components/BillboardBox'
import Footer from '@/components/Footer'
import styles from '../styles/Test.module.css'
import AccordionComp from '../components/AccordionComp'
import FormEmail from '../components/FormEmail';
import CardImage from '@/components/CardImage'

const Test = () => {
    return (
        <>
        <div className={`${styles.test}`}>
            <Header />
            <BillboardBox />
                        
        </div>
        <div className={`${styles.test2}`} >
        <CardImage src="/../images/en.png" alt="Imagen 1" titulo="Disfruta en tu TV"
            cuerpo="Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más."
        />
        <CardImage src="/../images/en2.png" alt="Imagen 2" titulo="Disfruta donde quieras"
            cuerpo="Películas y series ilimitadas en tu teléfono, tablet, computadora y TV."
        />
        <CardImage src="/../images/es-AR.png" alt="Imagen 1" titulo="Crea perfiles para niños"
            cuerpo="Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía."
        />
        <CardImage src="/../images/es2.png" alt="Imagen 2" titulo="Descarga tus series para verlas offline"
            cuerpo="Guarda tu contenido favorito y tendrás siempre algo para ver."
        />
         <AccordionComp />
         <FormEmail />
        <Footer />
        </div>
        </>

    )
}

export default Test