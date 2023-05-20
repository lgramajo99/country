import { Link } from 'react-router-dom';
import style from './Footer.module.css';

function Footer() {
    return (<footer className={style.footer}>
        <ul className={style.containerUp}>
            <li><Link to={'/'}>Inicio</Link></li>
            <li><Link to={'/'}>Contacto</Link></li>
            <li><Link to={'/'}>Preguntas frecuentes</Link></li>
            <li><Link to={'/'}>Sobre nosotros</Link></li>
            <li><Link to={'/'}>¿Encontraste algun problema?</Link></li>
            <li><Link to={'/'}>NEWSLATTER!</Link></li>

        </ul>
        <hr />
        <h4>Nuestras redes sociales</h4>
        <ul className={style.containerDown}>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <p className={style.copy}>&copy; 2023 Todos los derechos reservados | Henry Coutries</p>
    </footer>)
}

export default Footer