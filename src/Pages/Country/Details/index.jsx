import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTheme } from '../../../components/Context/ThemeProvider'
import CountryData from '../../../components/Data/data.json'
//import { Link } from 'react-router-dom'
export default function Details() {

    const { id } = useParams();

    console.log(id);
    const { isDarkMode } = useTheme();

    const CountryInfo = CountryData.find(country => country.id === Number(id));



const currencies = CountryInfo.currencies.map(currency => currency.name);

// Extracting native language names from the languages array
const [language1, language2, language3] = CountryInfo.languages.map(language => language.name);

const hasBorders = CountryInfo.borders && CountryInfo.borders.length > 0;


    return (<main className='px-8' style={{
      background: isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
      color: isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    }}>
      <div id={CountryInfo.id} className='pt-16 pb-40' >
        <div className="md:flex items-center justify-around ">

          <div>     
          <Link to={"/"}><button style={{
      background: isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
      color: isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
    }} className='border rounded py-1 px-5 shadow-2xl -mt-10 mb-10' >Back</button></Link>

            <img src={CountryInfo.flags.png} alt={CountryInfo.name} className='mb-8 md:mb-auto info-img' />
          </div>
         
         <div>
         <h3 className=' ml-4 text-2xl md:text-3xl font-bold pb-10 text-center md:text-left'>{CountryInfo.name} </h3>
         <p>Native Name: {CountryInfo.nativeName}</p>
         <p>Population: {CountryInfo.population}</p>
         <p>Region: {CountryInfo.region}</p>
         <p>Subregion: {CountryInfo.subregion}</p>
         <p>Capital: {CountryInfo.capital}</p>
       </div>
       <div>
         <p>Top Level Domain: {CountryInfo.topLevelDomain}</p>
           <p>Currencies: {currencies.join(', ')}</p>
         <p>Languages: {[`${language1},  ${language2}, ${language3} `]}</p>
       </div>
         </div>

    
         <div className='flex flex-wrap md:flex-no-wrap md:justify-end items-center md:mr-36 mt-10 gap-4'>
  <h3 className='font-semibold'>Border Countries:</h3>

  {hasBorders ? (
    CountryInfo.borders.map((border, index) => (
      <Link to={`/country/details/${id}`} key={index}>
        <button className='cursor-pointer border px-4 py-1 shadow-2xl rounded'>
          {border}
        </button>
      </Link>
    ))
  ) : (
    <p className='text-sm'>No Data</p>
  )}
</div>

</div></main>)}
