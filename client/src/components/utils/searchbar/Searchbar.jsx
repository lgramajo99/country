import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryName } from '../../../redux/actions/getCountryName.action.js';
import style from './Searchbar.module.css';

function Searchbar() {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const countries = useSelector(state => state.getCountryName.data);
    const loading = useSelector(state => state.getCountryName.loading);
    const error = useSelector(state => state.getCountryName.error);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchCountryName(searchText));
    };

    return (
        <div className={style.contenedor}>
            <form className={style.buscador} onSubmit={handleSearch}>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Buscar país"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={style.boton} type="submit" disabled={loading}>
                    🔎
                </button>
            </form>

            {loading && <ul className={style.lista}><li>Cargando...</li></ul>}
            {error && <ul className={style.lista}><li>Error: {error.message}</li></ul>}

            {countries.length > 0 && (
                <ul className={style.lista}>
                    {countries.map((country) => (
                        <li key={country.id}>{country.nombre}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Searchbar;
