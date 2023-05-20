import style from './Cardlist.module.css';
import Card from '../card/Card.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/actions/getCountry.action';

function Cardlist() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.getCountry.data);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    if (!countries) {
        return null; // O puedes mostrar un mensaje de carga mientras los datos se están obteniendo
    }

    return (


        <article className={style.cardlist}>
            {countries.slice(0, 15).map(({ id, nombre, imagenBandera, continente }) => (
                <Card key={id} nombre={nombre} imagen={imagenBandera} continente={continente} />
            ))}
        </article>
    );
}

export default Cardlist;
