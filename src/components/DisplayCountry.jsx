import React from 'react'
import { Link } from 'react-router-dom';


export default function DisplayCountry({ id, desc, country }) {
  // const {id, desc, country} = props
  return (
    <Link to={`/country/details/${id}`}>
      <div>
        <div>
          <h1 className="">{country}</h1>

          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
