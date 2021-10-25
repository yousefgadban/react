import React, {useState, useEffect} from "react";
import axios from "axios";

export const Simple = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( async() => {
        console.log('did mount');

        const response = await axios.get('https://restcountries.com/v3.1/name/united', {});

        console.log(response.data);

        let countriesArr = response.data.map((c) => {
            return <div>{c.name.common}</div>
        });
        
        setData(response.data);
        setFilter(countriesArr);

    }, []);


    return (
        <div>
            {console.log(data)}
            <input type="text" value={search} onChange={(e)=>{
                let filt = e.target.value;
                console.log(filt);
                
                let filteredArray = [];
                let countriesArr = data.map((c) => {
                    console.log(c.name.common);
                    if (c.name.common.toLowerCase().includes(filt.toLowerCase())) {
                        filteredArray.push(<div>{c.name.common}</div>)
                    }
                });
                console.log(filteredArray);

                setSearch(filt);

                setFilter(filteredArray);

            }} />
            {filter}
        </div>
    );
}

