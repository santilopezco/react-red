import Styles from './DropDownMenu.module'


const NavBarr = () => {
    return ( 
        <div className={Styles.DropDownMenu}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/#Product">Productos</a>
                    </li>
                    <li>
                        <a href="/#Follow">Síguenos</a>
                    </li>
                    <li>
                        <a href="/#About">Quiénes Somos</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBarr;