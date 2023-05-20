import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/actions/getCountry.action';

function Side() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.getCountry.data);
    const date = new Date();
    const mesIndex = date.getMonth();
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
    
    const mes = meses[mesIndex];

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    return { countries, mes };
}

export default Side;
