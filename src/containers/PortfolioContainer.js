import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  renderStocks = () => {
    let stocksToRender = this.props.stocks;
    return stocksToRender.map((stock) => {
      return (
        <Stock
          stock={stock}
          key={stock.id}
          removeFromPortfolio={this.props.removeFromPortfolio}
        />
      );
    });
  };

  render() {
    console.log("inPortCont", this.props.stocks);
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderStocks()}
      </div>
    );
  }
}

export default PortfolioContainer;
