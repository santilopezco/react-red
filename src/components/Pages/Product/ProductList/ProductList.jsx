import React from 'react';
import Styles from './ProductList.module.css'


const ProductList = (props) => {
    const {children}=props
    return (
        <div className={Styles.ProductList} >
            <hr />
            <div className={Styles.ProductListTitle} >
                <h1>Productos</h1>
            </div>
            <div className={Styles.ProductListCont}>
                {children}
            </div>
        </div>
    );
  };
  
  export default ProductList;