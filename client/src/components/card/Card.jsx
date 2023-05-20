import style from './Card.module.css';

function Card({ nombre, continente, imagen }) {
    return (
        <section className={style.card}>
            <header className={style.header}>
                <img className={style.bandera} src={imagen} alt={nombre} />
            </header>
            <p className={style.nombre}>{nombre}</p>
            <p className={style.continente}>{continente}</p>
        </section>
    )
}

export default Card