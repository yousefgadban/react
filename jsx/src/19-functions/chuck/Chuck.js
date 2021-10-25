import axios from "axios";
import React, {useState, useEffect} from "react";
import Spinner from "../../Spinner/Spinner";
import SearchBar from './SearchBar'

const Chuck = (props) => {

    const [showLoader, setShowLoader] = useState(false);
    const [searchJokes, setSearchJokes] = useState([]);
    const [JokesSelect, setJokesSelect] = useState([]);
    const [joke, setJoke] = useState('');

    let jokesCategories = [];

    let selectedCat = 'random';

    useEffect(()=>{
        getCategories();
    }, [])

    const getCategories =  async() => {
        console.log('getCategories');
        setShowLoader(true)

        const response = await axios.get('https://api.chucknorris.io/jokes/categories', {
        });

        console.log(response.data);

       

        jokesCategories = response.data

        console.log(jokesCategories);

        let JokesSelect = jokesCategories.map((joke) => {
            return <option value={joke}>{joke}</option>
        })

        setJokesSelect(JokesSelect);

        setShowLoader(false);
       
    }

    const onCategorySelected = (event) => {
        console.log('onCategorySelected ' +  event.target.value);

        selectedCat = event.target.value;
    }

    const onJokeClick = async(event) => {
        console.log('onJokeClick');
        setShowLoader(true)

        let response = null;

        if (selectedCat === 'random') {
            response = await axios.get('https://api.chucknorris.io/jokes/random', {
            });
        } else {
            response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${selectedCat}`, {
            });
        }

       

        console.log(response);

        setJoke(response.data.value);
        setShowLoader(false)

    }

    const onSearchSubmit = async (term) => {
        console.log(`parent ${term}`);

        setShowLoader(true)

        const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${term}`, {
        });

        console.log(response);

        let searchJokes = response.data.result.map((jokeObj, i) => {
            return <p>{i+1} : {jokeObj.value}</p>
        });

        console.log('searchJokes', searchJokes);

        setSearchJokes(searchJokes);

        setShowLoader(false);

    }

    
        return (

            <div>
                {console.log('render', searchJokes)}
                <div style={{display : !showLoader ? 'flex' : 'none', flexDirection: 'column', width: '50vw'}}>
                    <input type="button" value="Joke" onClick={(e) => onJokeClick(e)} style={{width: '10vw'}} />
                    <p>{joke}</p>
                    <br />
                    <select 
                         id="categories" onChange={onCategorySelected}>
                        {JokesSelect}
                    </select>

                    <br />
                    <hr />
                    <SearchBar onSubmitFromParent={onSearchSubmit} />
                    <div>
                        {searchJokes}
                    </div>
                </div>
                <div style={{display : !showLoader ? 'none' : 'block'}}>
                    <Spinner style={{display : !showLoader ? 'flex' : 'none'}} />
                </div>
                
            </div>
        );
    
}

export default Chuck;