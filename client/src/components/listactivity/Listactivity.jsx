import style from './Listactivity.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivity } from '../../redux/actions/getActivity.action';
import Loading from '../loading/Loading';
import Errorcardlist from '../utils/error/Errorcardlist';
import Sortbutton from '../utils/botones/Sortbutton';

function Listactivity() {
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector(state => state.getActivity);

    useEffect(() => {
        dispatch(fetchActivity())
    }, [dispatch])

    if (loading) { return <Loading /> }
    if (error) { return <Errorcardlist /> }
    return (
        <table className={style.lista}>
            <thead>
                <tr>
                    <th>ID<Sortbutton /></th>
                    <th>Nombre</th>
                    <th>Duración</th>
                    <th>Dificultad</th>
                    <th>Temporada</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(({ id, nombre, dificultad, temporada, duracion }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{nombre}</td>
                        <td>{duracion}</td>
                        <td>{dificultad}</td>
                        <td>{temporada}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Listactivity;