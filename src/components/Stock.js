import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onMouseOver={(event) => {event.target.style.cursor = 'pointer'}} onClick={() => props.addToPort ? props.addToPort(props.stock) : props.removePort(props.stock)}>
        {/* onClick={() => props.handleStockClick(props.stock)} */}
        {/* now you can ask on this stock, does the function exist? if so call it, 
          if not, the other DOES exist, so call that */}
      <div className="card-body" >
        <h5 
        className="card-title">{
            props.name
          }</h5>
        <p className="card-text">
          {props.ticker}: {props.price}
          </p>
      </div>
    </div>


  </div>
);

export default Stock
