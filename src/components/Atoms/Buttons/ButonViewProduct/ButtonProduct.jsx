import React, { useState }  from 'react';
import Styles from'./ButtonProduct.module.css'

const ButtonProduct = () => {
    const [active, setActive] = useState(false)
    
    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className={Styles.ButtonProduct}>
            <button type='button' onClick={handleClick}>
                <a href="#">Ver Productos</a>
            </button>
        </div>
    );
}

export default ButtonProduct;