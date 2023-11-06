import React from 'react';
import './App.css';
// import Navbar from './components/Nav';

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Details from './Pages/Country/Details';
import Root from './components/Layout/Root';
import HomePage from './Pages/HomePages';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path='/country/details/:id' element={<Details />} />
      </Route>
    )
  );
return (


  <RouterProvider router={router}>

  </RouterProvider>

   
  );
}

export default App;