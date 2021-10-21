import React from "react";
import Color from "./Color";

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onColorClicked(col) {
        console.log('color clicked from parent '+ col);
    }

    render() { 
        return <div>
            <Color color='red' onColorClicked={this.onColorClicked} />
            <Color color='green' onColorClicked={this.onColorClicked} />
            <Color color='blue' onColorClicked={this.onColorClicked} />
        </div>
    }
}