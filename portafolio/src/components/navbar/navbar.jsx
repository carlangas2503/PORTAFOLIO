import style from './navbar.module.css'

function Navbar() {
    return(<div className={style.counter}>
        <ul className={style.list}>
            <li><a href="#inicio">inicio</a></li>
            <li><a href="#proyectos">proyectos</a></li>
            <li><a href="#contacto">contacto</a></li>
        </ul>
    </div>)
}

export default Navbar