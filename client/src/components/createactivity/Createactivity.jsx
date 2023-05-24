import style from './Createactivity.module.css';

function Createactivity() {
    return (
        <form className={style.formulario}>
            <h1>Crear actividad</h1>

            <input type="text" placeholder="Nombre" required />

            <input type="number" placeholder="Dificultad (1 - 5)" min="1" max="5" required />
            <input type="time" placeholder="Duración (hh:mm)" required />

            <div className={style.temporada}>
                <label>
                    <input type="radio" value="verano" name="temporada" defaultChecked />
                    Verano
                </label>
                <label>
                    <input type="radio" value="primavera" name="temporada" />
                    Primavera
                </label>
                <label>
                    <input type="radio" value="otoño" name="temporada" />
                    Otoño
                </label>
                <label>
                    <input type="radio" value="invierno" name="temporada" />
                    Invierno
                </label>
            </div>

            <button type="submit">Crear actividad</button>
        </form>
    )
}

export default Createactivity;