import style from './Paginado.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { turnPage, fetchCountries } from '../../../redux/actions/getCountry.action';

function Paginado() {
    const dispatch = useDispatch();
    const current = useSelector(state => state.getCountry.currentPage);
    const totalPages = useSelector(state => state.getCountry.totalPages);

    const handlePrevPage = () => {
        if (current > 1) {
            dispatch(turnPage(current - 1))
            dispatch(fetchCountries());
        }
    }
    const handleNextPage = () => {
        if (current < totalPages) {
            dispatch(turnPage(current + 1));
            dispatch(fetchCountries());
        }
    }
    const handleLastPage = () => {
        dispatch(turnPage(totalPages));
        dispatch(fetchCountries());
    }

    const handleFirstPage = () => {
        dispatch(turnPage(1));
        dispatch(fetchCountries());
    }

    return (
        <ul className={style.paginado}>
            <li><button onClick={handleFirstPage}>&laquo;</button></li>
            <li><button onClick={handlePrevPage}>&lt;</button></li>
            <h1>{current}</h1>
            <li><button onClick={handleNextPage}>&gt;</button></li>
            <li><button onClick={handleLastPage}>&raquo;</button></li>

        </ul>
    )
}

export default Paginado;