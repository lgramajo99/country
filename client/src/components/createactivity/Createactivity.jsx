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
    const [countCountry, setCountCountry] = useState(1);
    const [countries, setCountries] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const activityData = {
            nombre,
            dificultad,
            duracion,
            temporada,
            countries: [...countries]
        };
        
        console.log('Datos de actividad:', activityData);

        dispatch(postActivity(activityData));

        setNombre('');
        setDificultad('');
        setDuracion('');
        setTemporada('verano');
        setCountCountry(1)
        setCountries([])
    }

    const handleAddPais = () => {
        setCountCountry(countCountry + 1)
    };

    const handleRemovePais = () => {
        setCountCountry(countCountry - 1)
    };

    const handleChangeCountry = (e, index) => {
        const newCountries = [...countries];
        newCountries[index] = e.target.value;
        setCountries(newCountries);
    };

    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < countCountry; i++) {
            inputs.push(
                <input
                    key={i}
                    type="text"
                    value={countries[i] || ''}
                    placeholder="Agregar país"
                    onChange={(e) => handleChangeCountry(e, i)}
                />
            );
        }
        return inputs;
    };

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

            {renderInputs()}

            <div className={style.addPaises}>
                {
                    countCountry > 1
                    && <button type='button' onClick={handleRemovePais}>-</button>
                }
                <button type='button' onClick={handleAddPais}>+</button>
            </div>

            <button type="submit">Crear actividad</button>
        </form >
    )
}

export default Createactivity;