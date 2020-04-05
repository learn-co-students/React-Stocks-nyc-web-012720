import React from "react";

const Stock = (props) => {
  let handleClick = () => {
    !props.owned ? props.handleBuy(props.stock) : props.handleSell(props.stock);
  };

  return (
    <div>
      <div onClick={handleClick} className="ui card">
        <div className="card-body">
          <h5 className="card-title">{props.stock.ticker}</h5>
          <h2 className="card-title">{props.stock.name}</h2>
          <p className="card-text">{props.stock.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
