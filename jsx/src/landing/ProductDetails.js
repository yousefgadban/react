import React from "react";
import { useParams, useHistory  } from 'react-router-dom';
import productsData from "./productsData";

const ProductDetails = (props) => {
    
    const { id } = useParams();
    const history = useHistory();

    const product = productsData.filter((product) => {
        if (product.id === +id) {
            return product;
        }
    });

    console.log(product);

    if (product.length === 0) {
        history.push("/products");
    }

    const onBackClick = () => {
        console.log('onBackClick');
        history.push("/products");
    }

    
    return (
        product.length !== 0 ? 
            <div style={{width: '100vw', height: '92vh', backgroundColor: 'green'}}>
                <p>Product name: {product[0].title}</p>
                <p>Product size: {product[0].size}</p>
                <p>Product price: {product[0].price}</p>
                <img alt="" src={product[0].imageUrl} />
                <br />
                <input type='button' value='Back' onClick={()=> {onBackClick()}} />
            </div>
            : <div style={{width: '100vw', height: '92vh', backgroundColor: 'green'}}>No such a product</div>
        
        
    );

}

export default ProductDetails;