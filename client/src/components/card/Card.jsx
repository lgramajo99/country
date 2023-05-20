import style from './Card.module.css';

function Card() {
    return (
        <secction className={style.card}>
            <header className={style.header}>
                <img className={style.bandera} src="https://flagcdn.com/bi.svg" alt="Republic of Burundi" />
            </header>
            <p className={style.nombre}>Republic of Burundi</p>
            <p className={style.continente}>Africa</p>
        </secction>
    )
}

export default Card