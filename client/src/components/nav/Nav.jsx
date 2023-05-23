import { Link, useNavigate } from 'react-router-dom';
import style from './Nav.module.css';
import Searchbar from '../utils/searchbar/Searchbar';

function Nav() {
    const navigate = useNavigate()
    const toHome = () => { navigate('/inicio') }

    return (<nav className={style.nav}>
        <h1 className={style.logo} onClick={toHome}>Country</h1>
        <ul className={style.menu}>

            <li><Searchbar /></li>
            <li><Link to={'/inicio'}>Inicio</Link></li>
            <li><Link to={'/paises'}>Paises</Link></li>
            <li><Link to={'/nosotros'}>Sobre nosotros</Link></li>
            <li><Link to={'/administracion'}> Administracion ⚙</Link></li>
        </ul>
    </nav>)
}

export default Nav