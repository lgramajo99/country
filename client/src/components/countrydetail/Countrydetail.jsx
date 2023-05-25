import style from './Countrydetail.module.css';
import Loading from '../loading/Loading';
import Errorcardlist from '../utils/error/Errorcardlist';
import CountrydetailLogic from './CountrydetailLogic';

function Countrydetail() {

    const { country, error, loading } = CountrydetailLogic();
    const { id, nombre, imagenBandera, capital, continente, subregion, area, poblacion } = country;

    if (loading) { return <Loading /> }
    if (error) { return <Errorcardlist error={error.message} /> }

    return (
        <article className={style.detailpage}>
            <header className={style.cabecera}>
                <h1 className={style.nombre}>{`${nombre} - ID: [${id}]`}</h1>
                <img className={style.bandera} src={`${imagenBandera}`} alt={nombre} />
                <h3>Capital: {capital}</h3>
            </header>
            <hr />
            <footer className={style.pie}>
                <h3>Continente: {continente}</h3>
                <h3>Subregión: {subregion}</h3>
                <h3>Área: {area} Km<sup>2</sup></h3>
                <h3>Población: {poblacion} de personas aprox.</h3>
            </footer>
        </article>
    );
}

export default Countrydetail;
