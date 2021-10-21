import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {favoriteColor: 'red'};
        
        this.ref = React.createRef();
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({favoriteColor: 'green'});
        }, 2500)
    }

    componentDidUpdate() {
       console.log('componentDidUpdate');

       const div = document.querySelector('#aaa');
       div.innerHTML = `The updated favorite color is ${this.state.favoriteColor}`
    }

    render() {
        return (
            <div>
                <h1>My favotite color is: {this.state.favoriteColor}</h1>
                <div id="aaa">
                </div>
            </div>
        );
    }
}

export default LifeCycle;