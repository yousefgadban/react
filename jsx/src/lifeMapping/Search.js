import React from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchValue: ''};
    }

    onSearchChanged(event) {
        console.log('onSearchChanged ', event.target.value);
        this.setState({searchValue:  event.target.value})
        this.props.onSearchChanged(event.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.searchValue} onChange={(e)=> {this.onSearchChanged(e)}} />
            </div>
        );
    }
}