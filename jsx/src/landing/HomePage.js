import React from "react";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{width: '100vw', height: '92vh', backgroundColor: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                This is the home page
            </div>
        );
    }
}