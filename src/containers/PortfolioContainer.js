import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPort = stocks => {
    return stocks.map( stock => {
      return <Stock 
                // handleStockClick={this.props.handleStockClick}
                removePort={this.props.removePort}
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
        <h2>My Portfolio</h2>
          {
            this.renderPort(this.props.portStocks)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
