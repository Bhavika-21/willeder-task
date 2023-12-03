// Importing necessary modules
import React from "react";
import "./Logo.scss";

// Functional component for rendering the logo
const Logo = () => {
  // Returning JSX for the logo component
  return (
    <div className="logo">
      {/* Nested div for creating the square */}
      <div className="logo__square">
        {/* Individual div elements for creating the corners of the square */}
        <div className="top"></div>
        <div className="right"></div>
        <div className="bottom"></div>
        <div className="left"></div>
      </div>
    </div>
  );
};

// Exporting the Logo component
export default Logo;
