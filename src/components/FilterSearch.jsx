import React, { useState } from 'react';
import CountryData from './Data/data.json';
import { useTheme } from './Context/ThemeProvider';
 import { Link } from 'react-router-dom'; 

export const FilterSearch = () => {
  const { toggleTheme, isDarkMode } = useTheme();   // Getting isDarkMode state and toggleTheme function

  const [trySearch, setTrySearch] = useState("");

  function onChange(e) {
    setTrySearch(e.target.value);
  }

  const filteredCountries = CountryData.filter((country) => {
    return country.name.toLowerCase().includes(trySearch.toLowerCase());
  });

  return (
    <body
      style={{fontSize: '16px',fontFamily:'Nunito Sans',
        color: isDarkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 0%)',
        background: isDarkMode ? ' hsl(207, 26%, 17%)' : ' hsl(0, 0%, 98%)',
      }}
    >
      <div id="search-section" className="py-16 mx-10">
        <div className="md:flex justify-center md:justify-between">
          <div>
            <input  style={{background: 'hsl(0, 0%, 100%)',color:'hsl(0, 0%, 52%)'}} className=' outline-none pl-10 pr-14 py-2 pl-2'
              value={trySearch}
              type="search"
              onChange={onChange} 
              placeholder="Search for a country"
/>
          </div>
          <div className='mt-2'>
           <select id="Region" name='Region' className='text-black border-none outline-none px-2 '>
           <option value='Filter'>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value={"Europe"}>Europe</option>
              <option value={"Ocenia"}>Oceania</option>

           </select>
          </div>
        </div>
      </div>

      <section className='pb-12'  >
        <section className="grid md:grid-cols-4 gap-10 mx-8 md:mx-10">
    

          {filteredCountries.map((country) => (

<Link to={`/country-details/${country.id}`} >
<div key={country.id}
         

            className=' shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...'
            style={{background: isDarkMode?  'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)',
            color: isDarkMode ?  'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
            }}>
              <img src={country.flags.svg} alt="" />
              <h2>{country.name}</h2>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
 
            </div>  
             </Link>
          
          

          ))}
        </section>
      </section>
    </body>

  );
};

export default FilterSearch;
