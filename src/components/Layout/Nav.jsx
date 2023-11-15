import React from "react";
import { useTheme } from "../Context/ThemeProvider";

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleModeChange = () => {
    toggleTheme();
  };
  return (
    <header className="shadow-5xl">
      <nav
        id="first-section"
        className="py-7 shadow-2xl"
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

