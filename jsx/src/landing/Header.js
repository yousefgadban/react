import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{backgroundColor: '#2196f3', display: 'flex', alignItems: 'center', color: 'white', height: '8vh'}}>
                <div style={{margin: '12px 0px'}}>
                    <Link className="headerLink" to="/" >Home</Link>
                    <Link className="headerLink" to="/products" >Products</Link>
                </div>
            </div>
        );
    }
}