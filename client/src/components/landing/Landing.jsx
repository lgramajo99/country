import style from './Landing.module.css';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Landing() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleSwitchLogin = () => { setIsOpenModal(!isOpenModal) }

    const navigate = useNavigate()
    const handlerInvitado = () => { navigate('/inicio') };


    return (
        <section className={style.landing}>
            {
                !isOpenModal ?
                    <article className={style.principal}>
                        <h2>Encuentra el proximo destino para tus vacaciones.</h2>

                        <p>Busca las mejores actividades que se adapten a ti y a tu familia en todas partes del mundo.</p>

                        <button className={style.boton} onClick={handlerInvitado}>Entrar como invitado</button>
                        <button className={style.boton} onClick={handleSwitchLogin}>Entrar como administrador</button>
                    </article>
                    : //  ######################################################## 
                    <article>
                        <form className={style.formulario}>
                            <input className={style.input} type="text" placeholder='Usuario' />
                            <input className={style.input} type='password' placeholder='Contraseña' />
                            <label className={style.label}>
                                <input type="checkbox" name="Recordarme" />
                                Recordarme
                            </label>
                            <button className={style.boton}> Entrar </button>
                        </form>
                        <button className={style.boton} onClick={handleSwitchLogin}>Volver atras</button>
                    </article>
            }
        </section >
    )
}

export default Landing;