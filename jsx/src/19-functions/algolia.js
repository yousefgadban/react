import React, {useState, useEffect} from "react";
import axios from "axios";


export const Algolia = () => {
    
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    const [spinner, setSpinner] = useState(false);

    return (
        <div>
            <input type="text" value={search} onChange={(e)=>{
                setSearch(e.target.value);
            }} />
            <input type="button" value="search" onClick={ async (e)=>{
                console.log('search clicked ', search);

                setSpinner(true)

                const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`, {});

                console.log(response);

                setSpinner(false);

                let searchArr = response.data.hits.map((c) => {
                    return <div key={c.objectID}> <a href={c.url}>{c.url}</a> </div>
                });
                
                setResults(searchArr);
                // setFilter(countriesArr);

            }}/>
            <p style={{display: spinner ? 'block' : 'none'}} >Laoding...</p>
            <br />
            {results}
        </div>
    );
}