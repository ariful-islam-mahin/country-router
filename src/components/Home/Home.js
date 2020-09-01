import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country'

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    return (
        <div className='text-center'>
            <h3 className='my-3'>Countries: {countries.length}</h3>
            {
               countries.map(country => <Country key={country.numericCode} country={country}></Country>) 
            }
        </div>
    );
};

export default Home;