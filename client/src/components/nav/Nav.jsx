import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import Searchbar from '../utils/searchbar/Searchbar';

function Nav() {
    return (<nav className={style.nav}>
        <h1>Country</h1>
        <ul className={style.menu}>

            <li><Searchbar /></li>
            <li><Link to={'/inicio'}>Inicio</Link></li>
            <li><Link to={'/paises'}>Paises</Link></li>
            <li><Link to={'/nosotros'}>Sobre nosotros</Link></li>
            <li><Link to={'/administracion'}>⚙</Link></li>
        </ul>
    </nav>)
}

export default Nav