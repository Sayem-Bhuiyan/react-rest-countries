import PropTypes from 'prop-types'
import './Country.css'
import { useState } from 'react';

const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }
        return (
        <div className={`country ${visited ? "visited" : "non-visited"}`}>
            <img src={flags.png} alt="" />
            <h3 style={{
                color: visited ? 'purple' : 'black',
            }}>Name : {name.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited} className='btn-visited'>
                {visited ? "Visited" : "Visit"}
            </button>
            {
                visited ? 'I have visited this Country' : 'I want to visit.'
            }
        </div>
    );
};
Country.propTypes = {
    country: PropTypes.object
}
export default Country;