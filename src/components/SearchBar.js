import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="Alphabetically" checked={props.sort === "Alphabetically"} onChange={e => props.handleSortChange(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sort" value="Price" checked={props.sort === "Price"} onChange={e => props.handleSortChange(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={e => props.handleFilterChange(e)} value={props.filter} >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
