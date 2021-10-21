import React from "react";


class Hide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: true};
    }

    showHide = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div>
                <input type="button" value="show/hide" onClick={(e) => this.showHide(e)} />
                <div style={{height: '5vw', width: '5vw', backgroundColor: 'red', visibility: this.state.show ? 'visible' : 'hidden'}}></div>
            </div>
        );
    }

}

export default Hide;