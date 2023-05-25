import style from './Sortbutton.module.css';
import { useState } from 'react';

function Sortbutton() {
    const [arrow, setArrow] = useState(true);
    const switchArrow = () => { setArrow(!arrow) }

    return (
        <button onClick={switchArrow} className={style.sortButton}>
            {arrow
                ? <span className={style.arrowUp}></span>
                : <span className={style.arrowDown}></span>
            }
        </button >
    )
}

export default Sortbutton;