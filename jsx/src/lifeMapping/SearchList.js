import React from "react";
import SearchCard from "./SearchCard";

const SearchList = (props) => {

    const state = {usersData: []};

    console.log('usersData', props.usersData);

    const users = props.usersData.map((user) => {
        console.log(user[0].name.first);
        return  <SearchCard key={user[0].id} name={`${user[0].name.first} ` + `${user[0].name.last}` } imgURL={user[0].picture.large} />
    })


    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '10px'}}>
            {users}
        </div>
    );

}


export default SearchList;