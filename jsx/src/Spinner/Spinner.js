import React from "react";
import './spinner.css'

class Spinner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className="message">{this.props.message}</p>
            </div>
           
        );
    }
}

export default Spinner;