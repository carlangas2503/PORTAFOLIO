import style from './navbar.module.css'
import { useState } from 'react'

function Navbar() {
    const [menu, setMenu] = useState(false)
    return(<div className={style.counter}>
        <div className={style.hidemobile}>
          <ul className={style.list}>
             <li><a href="#inicio">inicio</a></li>
             <li><a href="#proyectos">proyectos</a></li>
             <li><a href="#cv">CV</a></li>
             <li><a href="#contacto">contacto</a></li>
             <img src="" alt="yo" />
          </ul>
        </div>
        <div className={style.mobile}>
            <div>
                <button className={style.menu} onClick={()=>setMenu(!menu)}>...</button>
                <ul className={menu?style.openmenu:style.closemenu}>
                 <li><button onClick={()=>setMenu(!menu)}>x</button></li>  
                 <li><a href="#inicio">inicio</a></li>
                 <li><a href="#proyectos">proyectos</a></li>
                 <li><a href="#cv">CV</a></li>
                 <li><a href="#contacto">contacto</a></li>
                </ul>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBovb9KPf33Cx8qDS6oWP0Xaxi5Eu6uojoQ&usqp=CAU" alt="yo" />                
            </div>

        </div>
    </div>)
}

export default Navbar