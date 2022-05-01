import React, {useState, useEffect} from 'react';
import axios from 'axios' ;

const Poke = () => {
    const [responseData, setResponseData] = useState([]);
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500')
        .then(response=>{
            setResponseData(response.data.results);
            // console.log('responseData:',responseData);
            // console.log('responsedataResults', responseData.results);
        })
        .catch((err) => console.log(err));
    }, []); // only render on first payload
    

    return (
        <div>
            <h2>All Pokemon - Axios</h2>
            { responseData.map((mon, index)=> {
                return (<div key={index}>{index} - {mon.name.toUpperCase()}</div>)
            })} 
        </div>
    )
}

export default Poke;