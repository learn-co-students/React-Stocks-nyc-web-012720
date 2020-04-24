import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let stocks = this.props.stocks

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            stocks.map(stock => <Stock stock={stock} key={stock.id} removeStock={this.props.removeStock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
