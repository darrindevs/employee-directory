// ✅ todo import react 
// ✅ todo import component styles 
import React from "react";
import "./style.css";


// ✅ todo define the component
const Search = (props) => {
    // ✅ todo render the search form 
      return (
        <form>
        <div className="">
          <div className="input-group">
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder='Search for Employee'
              id="search"
            />
          </div>
        </div>
      </form>
      );
    }
    
    export default Search;