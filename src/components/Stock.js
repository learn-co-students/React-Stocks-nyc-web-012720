import React from 'react'

// { "id": 1,
//       "ticker" :"GOOG",
//       "name": "Google",
//       "type": "Tech",
//       "price": 1194.80
//     }


const Stock = ({stock, onHandleClick}) => (  
  <div onClick={() => {onHandleClick(stock.id)}}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            stock.name
          }</h5>
        <p className="card-text">
        {stock.ticker}: {stock.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
