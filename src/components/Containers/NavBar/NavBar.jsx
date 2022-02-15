import Styles from './NavBar.module.css'
import Logo from '../../../Assets/logos/logored.svg'
import Car from '../../../Assets/logos/car.svg'

const NavBar = () => {
    return ( 
        <div className={Styles.NavBar}>
            <img className={Styles.logo} src={Logo} alt={'imagelogo'}></img>
            <nav className={Styles.navli}>
                <ul>
                    <li>
                        <a href="/#inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="/#productos">Productos</a>
                    </li>
                    <li>
                        <a href="/#Síguenos">Síguenos</a>
                    </li>
                    <li>
                        <a href="/#Quiénes Somos">Quiénes Somos</a>
                    </li>
                </ul>
            </nav>
            <img className={Styles.Car} src={Car} alt={'imagelogo'}></img>
        </div>
     );
}
 
export default NavBar;