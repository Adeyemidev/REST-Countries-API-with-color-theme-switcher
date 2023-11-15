import { useTheme } from './Context/ThemeProvider';
import { Link } from 'react-router-dom';


export default function DisplayCountry({ id, flags, name, population, region, capital }) {
 
  const {isDarkMode} = useTheme()
  return (
    <Link to={`/country/details/${id}`}>
     
        <div className=' shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... pb-6'
        
        style={{background: isDarkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
                color: isDarkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
                  }}>

<img src={flags} alt={`Flag of ${name}`} style={{ height: '213px',  width: '400px'}}/>
            <h2>{name}</h2>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
             <p>Capital: {capital}</p>
        </div>
    </Link>
  );
}



