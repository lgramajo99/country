import style from './Searchbar.module.css';

function Searchbar() {
    return (
        <form className={style.buscador}>
            <input className={style.input} type="text" placeholder="Buscar pais" />
            <button className={style.boton} disabled>🔎</button>
        </form>
    )
}

export default Searchbar;