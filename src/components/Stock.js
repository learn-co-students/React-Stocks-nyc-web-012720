import React from 'react';

const Stock = (props) => {
  const handClick = () => {
    if (props.name === 'buy') {
      return props.buyStock(props.stock);
    } else if (props.name === 'sell') {
      return props.sellStock(props.stock);
    }
  };
  return (
    <div>
      <div className='card'>
        <div className='card-body' onClick={handClick}>
          <h5 className='card-title'>{props.stock.name}</h5>
          <p className='card-text'>
            {props.stock.ticker}: {props.stock.price}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Stock;
