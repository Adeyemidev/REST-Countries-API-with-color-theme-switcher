import React from 'react';
import FilterSearch from '../components/FilterSearch';
import Navbar from '../components/Nav';
import { ThemeProvider } from '../components/Context/ThemeProvider';
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <h1 className='text-black  text-2xl md:text-3xl text-center mt-60 '>Something went wrong.....</h1>;
      }
  
      return this.props.children;
    }
  }
  

export const HomePage = ()=>{

    return(  

    <ThemeProvider>
      <ErrorBoundary>
        <div className='body'>
        <Navbar />
          <FilterSearch />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
