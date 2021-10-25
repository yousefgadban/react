import React from "react";
import Card from "./Card";
import data from './data'
import Name from "./Name";

export default class DataMasseging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], names: [], before90: []};
    }

    componentDidMount() {
        console.log(data);
        this.setState({data: data});
        let names = this.getAllNames(data);
        console.log('names', names);
        let before90 = this.getBefore90(data);
        console.log('before90', before90);

        this.setState({names: names,before90: before90});
    }

    getAllNames = (data) => {
        return data.map((o) => {
            return o.name
        });
    }

    getBefore90 = (data) => {
        return data.filter((o) => {
            if (+o.birthday.substring(o.birthday.length - 4) < 1990) {
                return o;
            }
        });
    }

    render() {
    
        return <div>
            <p>Names</p>
            <Name names={this.state.names}/>
            <br />
            <p>Before90</p>
            <Card before90={this.state.before90}/>
        </div>
    }
}