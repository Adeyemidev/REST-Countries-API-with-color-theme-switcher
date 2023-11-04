import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Nav';
import { CountryInfo } from './Pages/CountryInfo';


function App() {

return (
<Router>
  
  <Routes>
    <Route path='/' element={<HomePage/>}/>
     <Route path= '/country-details/:id' element={<CountryInfo />}/> 
  </Routes>
</Router>


   
  );
}

export default App;