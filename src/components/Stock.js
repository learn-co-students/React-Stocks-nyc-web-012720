import React from 'react'

const Stock = (props) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{
            props.ticker
          }</p>
          <p className="card-text">{
            props.type
          }</p>
          <p className="card-text">${
            props.price
          }</p>
          { props.option === "Buy" ?
            <button onClick={() => props.addToPortfolio(props.id)}>Buy Stock</button> :
            <button onClick={() => props.removeStock(props.id)}>Sell Stock</button>
          }
      </div>
    </div>
  </div>
);

export default Stock
