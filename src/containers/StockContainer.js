import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  // handleClick = (stock) => {
  //   this.props.renderToPortfolio(stock);
  // };

  renderStocks = () => {
    let stocksToRender = this.props.stocks;
    return stocksToRender.map((stock) => {
      return (
        <Stock
          stock={stock}
          key={stock.id}
          renderToPortfolio={this.props.renderToPortfolio}
        />
      );
    });
  };

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
