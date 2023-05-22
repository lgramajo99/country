import style from './Paginado.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { turnPage, fetchCountries } from '../../../redux/actions/getCountry.action';

function Paginado() {
    const dispatch = useDispatch();
    const current = useSelector(state => state.getCountry.currentPage);


    const handlePrevPage = () => {
        if (current > 1) {
            dispatch(turnPage(current - 1))
            dispatch(fetchCountries());
        }
    }
    const handleNextPage = () => {
        dispatch(turnPage(current + 1))
        dispatch(fetchCountries());
    }


    return (
        <ul className={style.paginado}>
            <li><button onClick={handlePrevPage}>{"<"}</button></li>
            <h1>{current}</h1>
            <li><button onClick={handleNextPage}>{">"}</button></li>
        </ul>
    )
}

export default Paginado;