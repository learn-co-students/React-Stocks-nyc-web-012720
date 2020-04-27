import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    const displayPortfolio = this.props.portfolio
    return displayPortfolio.map( stock => {
      return <Stock key={stock.id} {...stock} option="Sell" removeStock={this.props.removeStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderPortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;
