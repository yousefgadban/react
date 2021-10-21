import axios from "axios";
import React from "react";
import Spinner from "../Spinner/Spinner";
import SearchBar from './SearchBar'

class Chuck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showLoader: false};

        this.joke = '';
        this.jokesCategories = [];
        this.JokesSelect = [];
        this.searchJokes = [];

        this.categoriesRef = React.createRef();

        this.selectedCat = 'random';
    }

    componentDidMount() {
        this.getCategories();
    }

    async getCategories() {
        console.log('getCategories');
        this.setState({showLoader: true})

        const response = await axios.get('https://api.chucknorris.io/jokes/categories', {
        });

        console.log(response.data);

       

        this.jokesCategories = response.data

        console.log(this.jokesCategories);

        let div = this.categoriesRef.current;

        this.JokesSelect = this.jokesCategories.map((joke) => {
            return <option value={joke}>{joke}</option>
        })

        this.setState({showLoader: false})
       

    }

    onCategorySelected = (event) => {
        console.log('onCategorySelected ' +  event.target.value);

        this.selectedCat = event.target.value;
    }

    async onJokeClick(event) {
        console.log('onJokeClick');
        this.setState({showLoader: true})

        let response = null;

        if (this.selectedCat === 'random') {
            response = await axios.get('https://api.chucknorris.io/jokes/random', {
                // params: {
                //     query: term
                // }
            });
        } else {
            response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${this.selectedCat}`, {
                // params: {
                //     query: term
                // }
            });
        }

       

        console.log(response);

        this.joke = response.data.value;
        this.setState({showLoader: false})

    }

    onSearchSubmit = async (term) => {
        console.log(`parent ${term}`);

        this.setState({showLoader: true})

        const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${term}`, {
            // params: {
            //     query: term
            // } 
        });

        console.log(response);

        this.searchJokes = response.data.result.map((jokeObj) => {
            return <p>{jokeObj.value}</p>
        })

        this.setState({showLoader: false})

        console.log(this.searchJokes);

    }

    render() {
        return (
            <div>
                <div style={{display : !this.state.showLoader ? 'flex' : 'none', flexDirection: 'column', width: '50vw'}}>
                    <input type="button" value="Joke" onClick={(e) => this.onJokeClick(e)} style={{width: '10vw'}} />
                    <p>{this.joke}</p>
                    <br />
                    <select 
                        ref={this.categoriesRef} id="categories" onChange={this.onCategorySelected}>
                        {this.JokesSelect}
                    </select>

                    <br />
                    <hr />
                    <SearchBar onSubmitFromParent={this.onSearchSubmit} />
                    <div>
                        {this.searchJokes}
                    </div>
                </div>
                <div style={{display : !this.state.showLoader ? 'none' : 'block'}}>
                    <Spinner style={{display : !this.state.showLoader ? 'flex' : 'none'}} />
                </div>
                
            </div>
        );
    }
}

export default Chuck;