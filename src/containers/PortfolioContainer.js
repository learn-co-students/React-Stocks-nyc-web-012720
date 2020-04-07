import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  showPortfolio = () => {
    return this.props.portfolio.map(stock => <Stock key={stock.id} stock={stock} sellStock={this.props.sellStock}/> )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.showPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
