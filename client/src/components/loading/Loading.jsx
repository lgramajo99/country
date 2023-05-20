import style from './Loading.module.css';

function Loading() {
    return (<div className={style.loading}>
        <div className={style.spinner}></div>
    </div>)
}

export default Loading;