import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryId } from '../../redux/actions/getCountryId.action';

function CountrydetailLogic() {
    const { idPais } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.getCountryId.data);
    const error = useSelector(state => state.getCountryId.error);
    const loading = useSelector(state => state.getCountryId.loading);

    useEffect(() => {
        dispatch(fetchCountryId(idPais));
    }, [dispatch, idPais]);

    return { country, error, loading };
}

export default CountrydetailLogic;