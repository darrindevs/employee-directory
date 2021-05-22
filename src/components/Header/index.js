// ✅ todo import react
// ✅ todo import component styles
import React from "react";
import "./style.css";

// ✅ todo define the component
// ✅ todo render the header
function Header() {
  return (
        <div className="header">
          <h1 className="heading">Employee Directory</h1>
          <p className="">
            Click on name to sort or use the search box to narrow your results.
          </p>
        </div>
  );
}

export default Header;
