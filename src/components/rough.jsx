import React from "react";
import CountryData from "../components/Data/data.json";
import { useTheme } from "../components/Context/ThemeProvider";
import { useParams } from "react-router-dom";
import Navbar from "./Layout/Nav";
export const CountryInfo = () => {
  const { id } = useParams();

  const { isDarkMode } = useTheme();
  const selectedCountry = CountryData;

  //.find(country => country.id === id);

  {
    selectedCountry.map((Country) => {
      return (
        <>
          <Navbar />
          <div
            key={id}
            style={{
              background: isDarkMode
                ? "hsl(209, 23%, 22%)"
                : "hsl(0, 0%, 100%)",
              color: isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
            }}
          >
            <h3>{Country.name}</h3>

            <div className="flex">
              <div>
                <img src={Country.flags.png} alt={Country.name} />
              </div>

              <div>
                ll<p>Native Name: {Country.nativeName}</p>
                ll<p>Population: {Country.population}</p>
                ll<p>Region: {Country.region}</p>
                ll<p>Subregion: {Country.subregion}</p>
                ll<p>Capital: {Country.capital}</p>
              </div>

              <div>
                <p>Top Level Domain: {Country.topLevelDomain}</p>
                <p>Currencies: {Country.currencies}</p>
                <p>Languages: {Country.languages}</p>
              </div>
            </div>
          </div>
        </>
      );
    });
  }
};
