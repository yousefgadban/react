import React from "react";

export default class SearchCard extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {name: 'yousef', imgURL: 'https://randomuser.me/api/portraits/women/50.jpg'};
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', width: '200px'}}>
                <div style={{width: '200px', height: '200px', background: `url(${this.props.imgURL}) center/cover no-repeat`}} >

                </div>
                <p style={{height: '30px', textAlign: 'center'}}>
                    {this.props.name}
                </p>
            </div>
        );
    }
}