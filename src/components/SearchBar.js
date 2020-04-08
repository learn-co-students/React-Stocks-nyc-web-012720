import React from 'react';

const SearchBar = (props) => {


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name='sort' onChange={e => props.sortStocks(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name='sort' onChange={e => props.sortStocks(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterByType(e)}>
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
