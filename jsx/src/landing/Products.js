import React from "react";
import { Link } from "react-router-dom";
import productsData from "./productsData";

const Products = (props) => {

    const products = productsData.map((product) => {
        console.log(product);
        return <Link className="productsNameLink" to={`product/${product.id}`} key={product.id}>{product.title}</Link>
    });


    return (
        <div style={{width: '100vw', height: '92vh', backgroundColor: 'green'}}>
            <div style={{display: 'flex', alignItems: 'center', alignContent: 'center'}}>
                {products}
            </div>
            <input type="button" value="Back" />
        </div>
    );

}

export default Products;