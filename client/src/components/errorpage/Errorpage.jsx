import { useNavigate } from 'react-router-dom';

function Errorpage() {
    const navigate = useNavigate()
    const handlerBack = () => { navigate(-1) };
    const handlerHome = () => { navigate('/inicio') };

    return (<section>
        <h1>ERROR 404: Pagina no encontrada</h1>
        <button onClick={handlerBack}>Volver atras</button>
        <button onClick={handlerHome}>Volver al inicio</button>
    </section>)
}
export default Errorpage;