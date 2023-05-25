import style from './Sortbutton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { arrowId } from '../../../redux/actions/getActivity.action';

function Sortbutton() {
    const dispatch = useDispatch();
    const arrowIdState = useSelector(state => state.getActivity.arrowId)

    const switchArrow = () => { dispatch(arrowId(!arrowIdState)); }

    return (
        <button onClick={switchArrow} className={style.sortButton}>
            {arrowIdState
                ? (<span className={style.arrowDown}></span>)
                : (<span className={style.arrowUp}></span>)
            }
        </button >
    )
}

export default Sortbutton;