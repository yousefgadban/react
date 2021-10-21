import React from "react";

class SearchBar extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    state = {term: ''};

    onInputChange(event) {
       // console.log(event.target.value);
        this.setState({term: event.target.value})

    }

    onSearchSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term);

        this.props.onSubmitFromParent(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit= {this.onSearchSubmit} className="ui form">
                    <div className="field">
                        <label>Joke Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => {this.onInputChange(e)}}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;