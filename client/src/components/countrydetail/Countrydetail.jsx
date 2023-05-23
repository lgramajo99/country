import style from './Countrydetail.module.css';
import Loading from '../loading/Loading';
import Errorcardlist from '../utils/error/Errorcardlist';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryId } from '../../redux/actions/getCountryId.action';

function Countrydetail() {
    const { idPais } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.getCountryId.data);
    const error = useSelector(state => state.getCountryId.error);
    const loading = useSelector(state => state.getCountryId.loading);

    useEffect(() => {
        dispatch(fetchCountryId(idPais));
    }, [dispatch, idPais]);

    const { id, nombre, imagenBandera, capital, continente, subregion, area, poblacion } = country;

    if (loading) { return <Loading /> }
    if (error) { return <Errorcardlist error={error.message} /> }

    return (
        <article className={style.detailpage}>
            <header className={style.cabecera}>
                <h1 className={style.nombre}>{nombre ? `${nombre} - ID: [${id}]` : 'Nombre del País'}</h1>
                <img className={style.bandera} src={`${imagenBandera}`} alt={nombre} />
                <h3>Capital: {capital}</h3>
            </header>
            <hr />
            <footer className={style.pie}>
                <h3>Continente: {continente}</h3>
                <h3>Subregión: {subregion}</h3>
                <h3>Área: {area} Km<sup>2</sup></h3>
                <h3>Población: {poblacion} de personas aprox.</h3>
            </footer>
        </article>
    );
}

export default Countrydetail;
