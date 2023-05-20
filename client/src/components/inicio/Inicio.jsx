import style from './Inicio.module.css';
import Cardlist from '../cardlist/Cardlist.jsx';
import Side from '../side/Side.jsx'


function Inicio() {
    return (<section className={style.inicio}>
        <Side />
        <Cardlist />
    </section>)
}

export default Inicio