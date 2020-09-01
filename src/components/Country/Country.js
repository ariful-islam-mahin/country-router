import React from 'react';
import { useHistory } from 'react-router-dom';

const Countries = (props) => {
    const {name, capital, flag} = props.country;

    let history = useHistory();
    const handleClick = () => {
        history.push(`country/${name}`)
    }
    
    return (
        <div className='border p-4 m-4 rounded row bg-light text-center'>
            <div className='col-sm-5 mb-3'>
                <img className='w-25' src={flag} alt=""/>
            </div>
            <div className='text-sm-left mx-sm-0 mx-auto'>
                <h3>{name}</h3>
                <p>{capital}</p>
                <button onClick={handleClick} className='btn btn-primary'>View Details</button>
            </div>
        </div>
       
    );
};

export default Countries;