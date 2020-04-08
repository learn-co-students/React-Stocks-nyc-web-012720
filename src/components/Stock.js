import React from 'react'; 

const Stock = (props) => (
  < div >

    <div className="card" onClick={() => props.handleBuyStock ? props.handleBuyStock(props.stock) : props.handleSellStock(props.stock)}>
    <div className="card-body">
      <h5 className="card-title" id={props.stock.id}>
        {/* Company Name */}
        {props.stock.name}
      </h5>
      <p className="card-text">
        {/* ticker: stock price */}
        {props.stock.ticker}: ${props.stock.price}
      </p>
    </div>
  </div>


  </div >
);

export default Stock; 
