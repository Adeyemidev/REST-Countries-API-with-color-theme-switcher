import DisplayCountry from './DisplayCountry';
import Country from './Data/data.json'
import { useState } from 'react';
import { useTheme } from './Context/ThemeProvider';

export default function Countries() {

  const CountryData = Country;
  const { isDarkMode } = useTheme();
  const [trySearch, setTrySearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");



  function onChange(e) {
    setTrySearch(e.target.value);}


  const filteredCountries = CountryData.filter((country) => {
    return (
      country.name.toLowerCase().includes(trySearch.toLowerCase()) &&
      (selectedRegion === "" || country.region === selectedRegion)
    );});


  if (filteredCountries.length === 0) {
    return (<div className='text-center m-auto py-40 text-xl font-semibold'>
        <h1>Country Not Found</h1>
        <button
          className='cursor-pointer text-white px-4 py-1 mt-2 rounded'
          onClick={() => window.location.reload()}
          style={{ background: "hsl(207, 26%, 17%)"}}>
       Back
        </button>
      </div>);}


  return (
      <main
        style={{fontSize: "16px",fontFamily: "Nunito Sans",paddingBottom:"30px",
          color: isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 0%)",
          background: isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",}}>


        <div
          id="search-section"
          className="py-16 mx-8"
          style={{background: isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"}}>


          <div className="md:flex justify-center m-auto md:justify-between items-center">
            
            <input style={{background: "hsl(0, 0%, 100%)", color: "hsl(0, 0%, 52%)" }}
              className="outline-none shadow-2xl border pl-10 pr-14 py-2 pl-2"
              value={trySearch}
              type="search"
              onChange={onChange}
              placeholder="Search for a country...."/>


            <div>
              <select
                id="Region"
                name="Region"
                className="text-black border-none outline-none px-2 py-2 shadow-2xl"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
        </div>


        <section className="grid md:grid-cols-4 gap-8 mx-8">
          {filteredCountries.map((country) => (
            <DisplayCountry
              key={country.id}
              id={country.id}
              flags={country.flags.png}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </section>
      </main>
  );
}
