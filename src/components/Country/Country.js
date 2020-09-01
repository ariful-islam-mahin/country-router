import React from 'react';
import { useHistory } from 'react-router-dom';

const Countries = (props) => {
    const {name, capital} = props.country;

    let history = useHistory();
    const handleClick = () => {
        history.push(`country/${name}`)
    }
    
    return (
        <div className='border p-4 m-4 rounded'>
            <h2>{name}</h2>
            <h3>{capital}</h3>
            <button onClick={handleClick} className='btn btn-primary'>View Details</button>
        </div>
    );
};

export default Countries;