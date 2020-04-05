import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    fetchedStocks: [],
    stocks: [],
    portStocks: [],
    fetchSwitch: true,
  };

  componentDidMount() {
    this.fetchStocks();
  }

  fetchStocks = () => {
    this.state.fetchSwitch &&
      fetch("http://localhost:3000/stocks")
        .then((resp) => resp.json())
        .then((resp) => {
          this.setState({ fetchedStocks: resp, stocks: resp });
        });
  };

  handleBuy = (stock) =>
    !this.state.portStocks.includes(stock) &&
    this.setState({ portStocks: [...this.state.portStocks, stock] });

  handleSell = (stocktToSell) => {
    const newPort = this.state.portStocks.filter(
      (stock) => stock !== stocktToSell
    );
    return this.setState({ portStocks: newPort });
  };

  sortStocks = (event) => {
    let sortVal = event.target.value;
    let newStocks;

    switch (sortVal) {
      case "Alphabetically":
        newStocks = this.state.stocks.sort((a, b) =>
          a.name < b.name ? -1 : 1
        );
        this.setState({ stocks: newStocks });
        break;
      case "Price":
        newStocks = this.state.stocks.sort((a, b) =>
          a.price < b.price ? -1 : 1
        );
        this.setState({ stocks: newStocks });
        break;
      default:
        break;
    }
  };

  filterStocks = (event) => {
    let filteredStocks;
    event.target.value === "All"
      ? (filteredStocks = this.state.fetchedStocks)
      : (filteredStocks = this.state.fetchedStocks.filter(
          (stock) => stock.type === event.target.value
        ));
    return this.setState({ stocks: filteredStocks });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleSort={this.sortStocks}
          handleFilter={this.filterStocks}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              handleBuy={this.handleBuy}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.state.portStocks}
              handleSell={this.handleSell}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
