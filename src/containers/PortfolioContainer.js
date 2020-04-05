import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  
  renderPortfolioStocks = () => {
    if (this.props.portfolioStocks) {
      return this.props.portfolioStocks
        .map(stockInfo => (<Stock removeFromPortfolio={this.props.removeFromPortfolio} key={stockInfo.id} stock={stockInfo}/>))
    }
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderPortfolioStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
