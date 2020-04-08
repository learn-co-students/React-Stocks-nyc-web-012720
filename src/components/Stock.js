import React from 'react'

const Stock = (props) => (
    <div>
    
    <div className="card" >
      <div className="card-body" onClick={() => props.handleBuyStock ? props.handleBuyStock(props.stock) : props.handleSellStock(props.stockIndex)}>
          <h5 className="card-title">{
            props.stock.name
          }</h5>
          <p className="card-text">{
          `${props.stock.ticker} ${props.stock.price}`
          }</p>
        </div>
      </div>


    </div>
);

export default Stock
