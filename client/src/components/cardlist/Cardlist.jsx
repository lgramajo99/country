import style from './Cardlist.module.css';
import Card from '../card/Card.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/actions/getCountry.action';
import Loading from '../loading/Loading';
import Paginado from '../utils/paginado/Paginado';
import Errorcardlist from '../utils/error/Errorcardlist';
import Order from '../utils/order/Order';
import Filter from '../utils/filter/Filter';


function Cardlist() {
    const dispatch = useDispatch();
    const { countries, loading, error } = useSelector(state => state.getCountry);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    if (loading) { // Verifica si está en proceso de carga.
        return <Loading />;
    }

    if (error) { // Verifica si hubo un error y arroja que error es.
        return <Errorcardlist error={error.message} />
    }

    // si todo sale ok apareceran las cards
    return (
        <article className={style.cardlist}>
            <div className={style.selection}>
                <Order />
                <Filter />
            </div>
            {countries.map(({ id, nombre, imagenBandera, continente }) => (
                <Card key={id} id={id} nombre={nombre} imagen={imagenBandera} continente={continente} />
            ))}
            <Paginado />
        </article>
    );
}

export default Cardlist;
