import React from "react";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {before90: []};
    }

    componentDidUpdate() {

        if (this.state.before90.length === 0) {
            console.log(this.props.before90);
            let before90 = this.props.before90.map((person) => {
                return <div>
                        {person.name}
                        {person.birthday}
                    </div>
            })
            this.setState({before90: before90})
        }
        
    }

    render() {
        return (
            <div>
                {this.state.before90}
            </div>
        );
    }
}