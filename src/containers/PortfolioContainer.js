import React, { Component } from 'react';
import Stock from '../components/Stock';

class PortfolioContainer extends Component {
  renderMyStock = () => {
    if (this.props.myStocks.length < 1) {
      return null;
    }
    return this.props.myStocks.map((stock) => {
      return (
        <Stock
          key={stock.id}
          stock={stock}
          name='sell'
          sellStock={this.props.sellStock}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderMyStock()}
      </div>
    );
  }
}

export default PortfolioContainer;
