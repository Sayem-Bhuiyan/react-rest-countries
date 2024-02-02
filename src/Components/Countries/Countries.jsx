import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    console.log(countries)
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="countries-container">
                {
                    countries.map((country )=> <Country 
                    key={country.cca3} 
                    country= {country} />
                    )
                }
            </div>
        </div>
    );
};
export default Countries;