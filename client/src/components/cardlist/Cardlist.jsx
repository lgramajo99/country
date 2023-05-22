import style from './Cardlist.module.css';
import Card from '../card/Card.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/actions/getCountry.action';
import Loading from '../loading/Loading';
import Paginado from '../utils/paginado/Paginado';

function Cardlist() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.getCountry.data);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    if (!countries) {
        return <Loading />; 
    }


    return (

        <article className={style.cardlist}>
            {countries.map(({ id, nombre, imagenBandera, continente }) => (
                <Card key={id} nombre={nombre} imagen={imagenBandera} continente={continente} />
            ))}
            <Paginado />
        </article>
    );
}

export default Cardlist;
