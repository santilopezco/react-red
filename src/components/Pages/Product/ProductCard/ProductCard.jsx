import Styles from './ProductCard.module.css'


const ProductCard = ({name, price, description, id, img}) => {

    return(
        <div className={Styles.ProductCard} >
            <img src={img} alt='Brocoli'/>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{description}</p>
            <p>{id}</p>
        </div>
    )
}

export default ProductCard;