import React from 'react'

const Stock = (props) => (
  <div>
    <div className="card">
      <div onClick={() => props.transactStock(props.id, props.owner)} className="card-body">
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{
            props.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
