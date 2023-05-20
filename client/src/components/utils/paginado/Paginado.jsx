import style from './Paginado.module.css'

function Paginado() {
    return (
        <ul className={style.paginado}>
            <li><button>{"<<"}</button></li>
            <li><button>{"<"}</button></li>
            <li><button>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>...</button></li>
            <li><button>{">"}</button></li>
            <li><button>{">>"}</button></li>
        </ul>
    )
}

export default Paginado;