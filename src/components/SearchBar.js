import React from 'react';

const SearchBar = (props) => {
  const sortStocks = (event) => {
    let clone = props.stocks;
    let result = clone.sort((a, b) => {
      return a[event.target.className] > b[event.target.className] ? 1 : -1;
    });
    return props.sortStocks(event, result);
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type='radio'
          value='Alphabetically'
          className='name'
          checked={props.selectedOption === 'Alphabetically'}
          onChange={(event) => sortStocks(event)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type='radio'
          value='Price'
          className='price'
          checked={props.selectedOption === 'Price'}
          onChange={(event) => sortStocks(event)}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterStocks(event)}>
          <option value='Tech'>Tech</option>
          <option value='Sportswear'>Sportswear</option>
          <option value='Finance'>Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
