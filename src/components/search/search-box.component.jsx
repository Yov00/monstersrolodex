import React from "react";
import "./search-box.styles.css";
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search">
      <input
        type="search"
        style={{ height: "50px", margin: "50px 0" }}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
