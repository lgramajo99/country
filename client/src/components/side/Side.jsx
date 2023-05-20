import React from 'react';
import SideLogic from './Side.js';
import style from './Side.module.css'
import Loading from '../loading/Loading.jsx';

function Side() {
    const { countries, mes } = SideLogic();

    if (!countries) {
        return (
            <div>
                <ul className={style.listado}>
                    <h3>Top 30 países más visitados en {mes}</h3>
                    <Loading />
                </ul>
            </div>
        );
    }

    return (
        <div>
            <ul className={style.listado}>
                <h3>Top 30 países más visitados en Mayo</h3>
                {countries.slice(20, 50).map(({ id, nombre }) => (
                    <li key={id}>{nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default Side;
