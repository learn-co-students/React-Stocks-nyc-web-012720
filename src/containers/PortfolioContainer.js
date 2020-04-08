import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
          this.props.boughtStocks.map((stock, index) => <Stock key={stock.id} stock={stock} handleSellStock={this.props.handleSellStock} stockIndex={index}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
