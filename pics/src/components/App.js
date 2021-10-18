import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        console.log(`App ${term}`);

        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization : 'Client-ID sQtJXpbAkQHHiG6Uq48qkuXmBLq63DE1ZgDrLeE2hbk'
            }
        });

    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '16px'}}>
                <SearchBar onSubmitFromParent={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;

