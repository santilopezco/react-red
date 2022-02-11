import Styles from './Home.module.css'
import plant from '../../Assets/images/Verdura2.jpg'

const Home = () => {
    return ( 
        <div className={Styles.Home}>
             <div className={Styles.Container}>
                <h1 className={Styles.Hello}>Producimos hortalizas bajo parámetros agroecológicos</h1>
                    <div className={Styles.buttons}>
                        <button> <a href='/#Products'>Ver Productos</a></button>
                        <button> <a href='/#Call'>Llámanos</a></button>
                    </div>
                <h2>Utilizamos prácticas ecológicas de respeto por el ambiente, conservación del suelo y cuidado permanente de los recursos hídricos y del páramo</h2>
            </div>
            <img className={Styles.imagehome} src={plant} alt={"imgverdura"}></img>
        </div>
         

     );
}
 
export default Home;