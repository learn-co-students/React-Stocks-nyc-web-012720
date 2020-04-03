import React, { Component } from 'react';
import Stock from '../components/Stock';

class StockContainer extends Component {
  stockList = () => {
    return this.props.stocks.map((stock) => {
      return (
        <Stock
          key={stock.id}
          stock={stock}
          name='buy'
          buyStock={this.props.buyStock}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.stockList()}
      </div>
    );
  }
}

export default StockContainer;
