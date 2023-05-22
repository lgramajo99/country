import style from './Card.module.css';
import { useNavigate } from 'react-router-dom';


function Card({ id, nombre, continente, imagen }) {

    const navigate = useNavigate()
    const enterCountry = () => navigate(`/detail/${id}`)

    return (
        <section onClick={enterCountry} className={style.card}>
            <header className={style.header}>
                <img className={style.bandera} src={imagen} alt={nombre} />
            </header>
            <p className={style.nombre}>{nombre}</p>
            <p className={style.continente}>{continente}</p>
        </section>
    )
}

export default Card