import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
{console.log(props.filters)}
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.filters.filterFlip === "alphabetically"} onChange={props.handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.filters.filterFlip === "price"} onChange={props.handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleDropDownChange}>
          <option value={null}>None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
