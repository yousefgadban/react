import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageLIst from './ImageList';

class App extends React.Component {

    state = {images: []}

    onSearchSubmit = async (term) => {
        console.log(`App ${term}`);

        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        console.log(response.data.results);
        this.setState({images: response.data.results});

    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '16px'}}>
                <SearchBar onSubmitFromParent={this.onSearchSubmit} />
                <ImageLIst images={this.state.images} />
            </div>
        );
    }
}

export default App;

