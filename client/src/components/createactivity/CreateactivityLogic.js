import { useDispatch } from 'react-redux';
import { postActivity } from '../../redux/actions/postActivity.action.js';
import { useState } from 'react';

const CreateactivityLogic = () => {
    const dispatch = useDispatch();

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
        setCountCountry(1);
        setCountries([]);
    };

    const handleAddPais = () => {
        setCountCountry(countCountry + 1);
    };

    const handleRemovePais = () => {
        setCountCountry(countCountry - 1);
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

    return {
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
    };
};

export default CreateactivityLogic;
