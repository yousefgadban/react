import React, { createRef } from "react";
import Spinner from "../Spinner/Spinner";


class ShowSpinner extends React.Component {

    timer = null;
    constructor(props) {
        super(props);

        this.state = {time: 4}
        this.spinnerRef = React.createRef();
    }

    componentDidMount() {

        this.timer = setInterval(() => {
            this.setState({time: this.state.time - 1})
        }, 1000);

    }

    componentDidUpdate() {
        if (this.state.time === 0) {
            clearInterval(this.timer);
            const s = this.spinnerRef.current;
            console.log(s);
           
        }
    }

    render() {
        return(
            <div>
                <p>{this.state.time}</p>

                <div style={{display: this.state.time != 0 ? 'block' : 'none' }} >
                    <Spinner ref={this.spinnerRef} message="Spinner..." />
                </div>
                
                <p style={{display: this.state.time != 0 ? 'none' : 'block' }} >Data loaded successfully</p>
            </div>
           
        );
    }
}

export default ShowSpinner;