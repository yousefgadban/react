import React from "react";
import axios from "axios";
import Search from "./Search";
import SearchList from "./SearchList";

export default class LifeMapping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {usersData: [], filteredData: []};
    }

    componentDidMount() {
        this.getData();
    }
    
    componentDidUpdate() {

    }

    async getData() {
        console.log('getData');
        
        let usersArray = []
        for (let i = 0 ; i < 10 ; i++) {
            const response = await axios.get('https://randomuser.me/api/', {});
            usersArray.push(response.data.results);
        }

        console.log(usersArray);

        this.setState({usersData: usersArray, filteredData: usersArray});
        

        // this.jokesCategories = response.data

        // console.log(this.jokesCategories);

        // let div = this.categoriesRef.current;

        // this.JokesSelect = this.jokesCategories.map((joke) => {
        //     return <option value={joke}>{joke}</option>
        // })

        // this.setState({showLoader: false})

    }

    onSearchChanged = (text) => {
        console.log('LifeMapping ', text, this.state.usersData);

        if (text === '') {
            this.setState({filteredData: this.state.usersData});
        } else {
            let filteredUsers = this.state.usersData.filter((user) => {
                if (user[0].name.first.toLowerCase().includes(text.toLowerCase())) {
                    return user;
                } 
            });
    
           this.setState({filteredData: filteredUsers});
        }
    }


    render() {
        return (
            <div>
                LifeMapping
                <Search onSearchChanged={this.onSearchChanged} />
                <br />
                <SearchList usersData={this.state.filteredData} />
            </div>
        );
    }
}