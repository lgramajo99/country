import style from './Errorcardlist.module.css'

function Errorcardlist({ error }) {
    return (
        <div className={style.contenedor}>
            <h1 className={style.tipoError}>Hubo un error: {error}</h1>
            <img className={style.imgError} src="https://i.imgur.com/MA6sW3e.png" alt="Error" />
        </div>
    )
}

export default Errorcardlist;

// https://imgur.com/MA6sW3e