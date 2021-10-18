import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {
//             console.log(position);
//         },
//         (err) => {
//             console.log(err);
//         }
//     );

//     return (
//         <div>Latitude: </div>
//     );
// };


class App extends React.Component {

    constructor(props) {
        super();
        this.state = {lat: null};

      

        
    };

    componentDidMount() {
        console.log('componentDidMount');

        window.navigator.geolocation.getCurrentPosition(
            (position) => { 
                console.log(position);
                this.setState({lat: position.coords.latitude});
            },
            (err) => { console.log(err);}
        );

    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render () {
        
        return (
            <div>
                Latitude: {this.state.lat}
                <SeasonDisplay lat = {this.state.lat} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

