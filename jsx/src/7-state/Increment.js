import React from 'react';

class Increment extends React.Component {

    co = 0;

    constructor(props) {
        super(props);
        this.state = {count: 0};

       // this.handleClick = this.add.bind(this);
    }

    add = (c) => {
        this.setState({count: ++c})
    }

    render() {
        return (
            <div>
                <input type="button" value="increment" onClick={(e) => this.add(this.state.count, e)} />
                <p>{this.state.count}</p>
            </div>
        );
    }

   

}

export default Increment;