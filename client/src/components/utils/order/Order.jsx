import { useDispatch, useSelector } from 'react-redux';
import { orderCard } from '../../../redux/actions/getCountry.action';

function Order() {
    const dispatch = useDispatch();
    const orderBy = useSelector(state => state.getCountry.orderBy);

    const handleOrderChange = (e) => {
        const selectedOrder = e.target.value;
        dispatch(orderCard(selectedOrder));
    };

    return (
        <article>
            <label htmlFor="orderSelect">Order by:</label>
            <select id="orderSelect" value={orderBy} onChange={handleOrderChange}>
                <option value="default">Default</option>
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
            </select>
        </article>
    );
}

export default Order;
