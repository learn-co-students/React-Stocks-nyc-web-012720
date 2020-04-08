import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderPortfolioStocks = () => {
    return (this.props.portfolioStocks.map(stock => 
        <Stock 
          key={stock.id}
          stock={stock}
          handleSellStock={() => this.props.handleSellStock(stock)}
        />
      )
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {/* render your portfolio stocks here */}
          {this.renderPortfolioStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
