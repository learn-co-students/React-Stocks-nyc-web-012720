import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      {/* {console.log("inside SearchBar", props)} */}
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.checked === "Alphabetically"} onChange={props.handleChecked}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.checked === "Price"} onChange={props.handleChecked}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select value={props.filter} onChange={event => props.handleFilter(event)}>
          <option value="">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>

    </div>
  );
}


export default SearchBar;
