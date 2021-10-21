import React from "react";

export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
    }

    componentDidMount() {
        this.setState({checked : this.props.checked})
    }

    render() {
        return <div>
            <input 
                type='checkbox' 
                checked={this.state.checked}
                onClick={() => { console.log('asdfsd'); this.setState({checked : !this.state.checked}) }} /><label>{this.props.text}</label>
        </div>
    }
}