import style from './Createactivity.module.css';
import CreateactivityLogic from './CreateactivityLogic';

const Createactivity = () => {
    const {
        nombre,
        dificultad,
        duracion,
        temporada,
        countCountry,
        handleSubmit,
        handleAddPais,
        handleRemovePais,
        renderInputs,
        setNombre,
        setDificultad,
        setDuracion,
        setTemporada
    } = CreateactivityLogic();

    return (
        <form className={style.formulario} onSubmit={handleSubmit}>
            <h1>Crear actividad</h1>

            <input
                type="text"
                value={nombre}
                placeholder="Nombre de la actividad"
                onChange={(e) => setNombre(e.target.value)}
                required
            />

            <input
                type="number"
                value={dificultad}
                placeholder="Dificultad (1 - 5)"
                min="1"
                max="5"
                onChange={(e) => setDificultad(e.target.value)}
                required
            />

            <input
                type="time"
                value={duracion}
                placeholder="Duración (horas:minutos)"
                onChange={(e) => setDuracion(e.target.value)}
                required
            />

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
                {countCountry > 1 && (
                    <button type="button" onClick={handleRemovePais}>-</button>
                )}
                <button type="button" onClick={handleAddPais}>+</button>
            </div>

            <button type="submit">Crear actividad</button>
        </form>
    );
};

export default Createactivity;
