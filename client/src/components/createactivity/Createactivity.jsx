import style from './Createactivity.module.css';
import { useDispatch } from 'react-redux';
import { postActivity } from '../../redux/actions/postActivity.action.js';
import { useState } from 'react';

function Createactivity() {
    const dispatch = useDispatch()

    const [nombre, setNombre] = useState('');
    const [dificultad, setDificultad] = useState('');
    const [duracion, setDuracion] = useState('');
    const [temporada, setTemporada] = useState('verano');



    const handleSubmit = (e) => {
        e.preventDefault();

        const activityData = {
            nombre,
            dificultad,
            duracion,
            temporada,
        };

        dispatch(postActivity(activityData));

        setNombre('');
        setDificultad('');
        setDuracion('');
        setTemporada('verano');
    }


    return (
        <form className={style.formulario} onSubmit={handleSubmit}>
            <h1>Crear actividad</h1>

            <input
                type="text"
                value={nombre}
                placeholder="Nombre de la actividad"
                onChange={(e) => setNombre(e.target.value)}
                required />

            <input
                type="number"
                value={dificultad}
                placeholder="Dificultad (1 - 5)"
                min="1" max="5"
                onChange={(e) => setDificultad(e.target.value)}
                required />

            <input
                type="time"
                value={duracion}
                placeholder="Duración (horas:minutos)"
                onChange={(e) => setDuracion(e.target.value)}
                required />

            <div className={style.temporada}>
                <label>
                    <input
                        type="radio"
                        value="verano"
                        name="temporada"
                        defaultChecked={temporada === 'verano'}
                        onChange={() => setTemporada('verano')}
                    />
                    Verano
                </label>
                <label>
                    <input
                        type="radio"
                        value="primavera"
                        name="temporada"

                        onChange={() => setTemporada('primavera')}
                    />
                    Primavera
                </label>
                <label>
                    <input
                        type="radio"
                        value="otoño"
                        name="temporada"

                        onChange={() => setTemporada('otoño')}
                    />
                    Otoño
                </label>
                <label>
                    <input
                        type="radio"
                        value="invierno"
                        name="temporada"

                        onChange={() => setTemporada('invierno')}
                    />
                    Invierno
                </label>
            </div>

            <button type="submit">Crear actividad</button>
        </form>
    )
}

export default Createactivity;