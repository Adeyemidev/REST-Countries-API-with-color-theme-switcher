import React, { useEffect, useState } from 'react'
import DisplayCountry from './DisplayCountry';


  const DATA = [
    {
      id: 1,
      country: "Nigeria",
      desc: "We use one of new routers from 6.4. The data APIs are currently not supported in React Native, but should be eventually.",
    },
    {
      id: 2,
      country: "Kenya",
      desc: "We use one of new routers from 6.4. The data APIs are currently not supported in React Native, but should be eventually.",
    },
    {
      id: 3,
      country: "London",
      desc: "We use one of new routers from 6.4. The data APIs are currently not supported in React Native, but should be eventually.",
    },
  ];

export default function Countries() {


    // Fetch data

//     const [data, setData] = useState([])
// const [isLoading, setIsLoading] = useState(false)


//   const getData = async ()=>{

//      setIsLoading(true);
//  const result = await fetch("https://jsonplaceholder.typicode.com/users")


// setIsLoading(false)


//  const data = await result.json()

// setData(data)


// console.log(data);

 
//   }



//   useEffect(()=>{
//     getData()
//   }, [])
  


    //  const filteredCountries = CountryData.filter((country) => {
    //    return country.name.toLowerCase().includes(trySearch.toLowerCase());
    //  });

  return (
    <div className="px-10 py-10">
      <div>
        <div className='mb-10'>
          <form action="">
            <input type="text" />
          </form>
        </div>

        

       
        <div className="grid grid-cols-newcols">
          {DATA.map((item) => (
            <DisplayCountry
              key={item.id}
              id={item.id}
              country={item.country}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
