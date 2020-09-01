import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CountryDetail = () => {
    let {countryName} = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, []);
    console.log(country)
    const {name, capital, nativeName, population, region, flag} = country
    return (
        <div className='container text-center'>
            <h3 className='my-3'>Details of: {countryName}</h3>
            <div className='border p-4 m-4 rounded bg-light text-left'>
                <img className='w-50 my-3' src={flag} alt=""/>
                <h2 className='my-3'>Name: {name}</h2>
                <h4>Native Name: {nativeName}</h4>
                <h4>Capital: {capital}</h4>
                <h4>Region: {region}</h4>
                <h4>Population: {population}</h4>
            </div>
        </div>
    );
};

export default CountryDetail;