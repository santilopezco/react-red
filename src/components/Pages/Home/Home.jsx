import Styles from './Home.module.css'
import plant from '../../../Assets/Images/Verdura3.jpg'
/* import NavBar from '../../Containers/NavBar/NavBar'; */
import ButtonCall from '../../Atoms/Buttons/ButtonCall/ButtonCall'
import ButtonProduct from '../../Atoms/Buttons/ButonViewProduct/ButtonProduct';
import Slider from '../../../components/Containers/Slider/Slider'
/* import Footer from '../../Containers/Fotter/Footer.jsx' */
import Data from '../../../Assets/data'
import ProductCard from '../../Pages/Product/ProductCard/ProductCard.jsx'
import ProductList from '../Product/ProductList/ProductList';

const Home = () => {
    
   
    return ( 
        <div>
            
            <div className={Styles.Home}>
                <div className={Styles.Container}>
                    <h1 className={Styles.Hello}>Producimos hortalizas bajo parámetros agroecológicos</h1>
                        <div className={Styles.Buttons}>
                            <ButtonProduct className={Styles.ButtonProduct}/>
                            <ButtonCall className={Styles.ButtonCall}/>
                        </div>
                    <h2 className={Styles.Hellotwo} >Utilizamos prácticas ecológicas de respeto por el ambiente, la conservación del suelo y cuidado permanente de los recursos hídricos y del páramo</h2>
                </div>            
                <img className={Styles.imagehome} src={plant} alt={"imgverdura"}/>        
            </div>
            <div>
                <Slider/>
            </div>
            <ProductList>
                {
                    Data.map(item => (
                        <ProductCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                        />
                    ))
                }
           </ProductList>

        </div>
         

     );
}
 
export default Home;