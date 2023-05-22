import style from './Countrydetail.module.css';

function Countrydetail() {
    return (
        <article className={style.detailpage}>
            <header className={style.cabecera}>
                <h1 className={style.nombre}>Nombre Pais: [ID Pais]</h1>
                <img className={style.bandera} src="https://flagcdn.com/al.svg" alt="Nombre del pais" />
                <h3>Capital: Nombre</h3>
            </header>
            <hr />
            <footer className={style.pie}>
                <h3>Continente: Nombre</h3>
                <h3>Subregion: Nombre</h3>
                <h3>Area: 100000 Km<sup>2</sup></h3>
                <h3>Poblacion: 100000 de personas</h3>
            </footer>
        </article>
    )
}

export default Countrydetail;