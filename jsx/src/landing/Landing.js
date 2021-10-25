import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Products from "./Products";
import ProductDetails from "./ProductDetails";


export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={HomePage} />
                        <Route path="/products" exact component={Products} />
                        <Route path="/product/:id" component={ProductDetails} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}