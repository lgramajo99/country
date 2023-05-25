import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopCountriesName } from '../../redux/actions/getCountry.action';
import style from './Side.module.css';
import Loading from '../loading/Loading';
import Errorcardlist from '../utils/error/Errorcardlist';
import { Link } from 'react-router-dom';

function Side() {
    const dispatch = useDispatch();
    const { topCountries, topLoading, topError } = useSelector((state) => state.getCountry);

    const date = new Date();
    const mesId = date.getMonth();
    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const mes = meses[mesId];

    useEffect(() => {
        dispatch(fetchTopCountriesName());
    }, [dispatch]);

    if (topError) {
        return <Errorcardlist error={topError.message} />;
    }

    return (
        <div>
            <ul className={style.listado}>
                <h3>Top 30 países más visitados en {mes}</h3>
                {topLoading
                    ? <Loading />
                    : topCountries.map(({ id, nombre }) => (
                        <li key={id}><Link to={`/detail/${id}`}>{nombre}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Side;
