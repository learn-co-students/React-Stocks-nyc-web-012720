import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    const stockCard = this.props.stocks
    return stockCard.map( stock => {
      return <Stock key={stock.id} {...stock} option="Buy" addToPortfolio={this.props.addToPortfolio} />
    })
  }
  
  render() {

    return (
      <div>
        <h2>Stocks</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
