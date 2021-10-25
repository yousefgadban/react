import React from "react";

export default class Name extends React.Component {

    constructor(props) {
        super(props);
        this.state = {names: []};
    }

   

    componentDidMount() {
       
    }

    componentDidUpdate() {

        if (this.state.names.length === 0) {
            console.log(this.props.names);
            let names = this.props.names.map((name) => {
                return <div>{name}</div>
            })
            this.setState({names: names})
        }
        
    }

    render() {

        console.log('render', this.state.names);
        return (
            <div>
                {this.state.names}
            </div>
        );
        
    }
}