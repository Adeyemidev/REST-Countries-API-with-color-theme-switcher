// import React from 'react';
// import { useTheme } from './Context/ThemeProvider';

// export const Navbar = () => {
//   const { toggleTheme } = useTheme();

//   const handleModeChange = () => {
//     toggleTheme();
//   };

//   return (
//     <header className=''>
//       <nav
//         id='first-section'
//         className='py-8'
//         style={{
//           color: 'hsl(0, 0%, 100%)',
//           background:  'hsl(209, 23%, 22%)' ,
//         }}>
//         <div className='flex justify-between mx-8 md:mx-16 font-semibold md:text-xl'>
//           <div className=''>Where in the world?</div>
//           <div className='cursor-pointer' onClick={handleModeChange}>
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

//  export default Navbar;

import React from "react";
import { useTheme } from "../Context/ThemeProvider";

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleModeChange = () => {
    toggleTheme();
  };
  return (
    <header className="">
      <nav
        id="first-section"
        className="py-8"
        style={{
          color: isDarkMode ? "hsl(0, 0%, 100%)" : " hsl(0, 0%, 0%)",
          background: isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
        }}
      >
        <div className="flex justify-between mx-4 md:mx-10 font-semibold ">
          <div className="text-xl md:text-2xl">Where in the world?</div>
          <div
            className="cursor-pointer border px-2 py-1  shadow-2xl rounded"
            onClick={handleModeChange}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import React, { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };
