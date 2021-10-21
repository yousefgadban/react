import React from "react";
import Button from "../4-buttons/Button";

export default class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <input type='button' value={this.props.color} style={{backgroundColor: this.props.color }} onClick={()=> {this.props.onColorClicked(this.props.color)}} />
        </div>
    }
}