import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = stocks => {
    return stocks.map( stock => {
      return <Stock 
                // handleStockClick={this.props.handleStockClick}
                addToPort={this.props.addToPort}
                stock={stock}
                key={stock.id}
                ticker={stock.ticker}
                name={stock.name}
                type={stock.type}
                price={stock.price}
                />
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
          {
            this.renderStocks(this.props.stocks)
          }
      </div>
    );
  }

}

export default StockContainer;
