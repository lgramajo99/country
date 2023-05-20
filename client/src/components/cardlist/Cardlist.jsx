import style from './Cardlist.module.css';
import Card from '../card/Card.jsx';

function Cardlist() {
    return (
        <article className={style.cardlist}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </article>
    )
}

export default Cardlist;