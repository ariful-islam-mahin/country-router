import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CountryDetail = () => {
    let {countryName} = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, []);
    
    const {name, population, region, capital} = country[0];
    
    console.log(name, population, region, capital)
    
    return (
        <div>
            <h3>Details of {countryName}</h3>
        </div>
    );
};

export default CountryDetail;