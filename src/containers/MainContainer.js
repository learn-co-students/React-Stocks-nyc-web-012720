import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      portfolioStocks: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ stocks: data });
      });
  }

  renderToPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock],
    });
  };

  uniquePortfolioStocks = () => {
    const array = this.state.portfolioStocks;
    const newArray = Array.from(new Set(array));
    return newArray;
  };

  removeFromPortfolio = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter((s) => s !== stock),
    });
  };

  sortStocks = (sortBy) => {
    let newArray = [];
    switch (sortBy) {
      case "Alphabetically":
        newArray = this.state.stocks.sort((a, b) =>
          a.ticker > b.ticker ? 1 : -1
        );
        break;
      case "Price":
        newArray = this.state.stocks.sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
        break;
      default:
        console.log("Wrong Choice");
    }
    this.setState({
      stocks: newArray,
    });
  };

  filterStocks = (type) => {
    if (type !== "All") {
      this.setState({
        stocks: this.state.stocks.filter((stock) => stock.type === type),
      });
    } else {
      this.setState({
        stocks: this.state.stocks,
      });
    }
  };

  render() {
    return (
      <div>
        <SearchBar
          sortStocks={this.sortStocks}
          filterStocks={this.filterStocks}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              renderToPortfolio={this.renderToPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.uniquePortfolioStocks()}
              removeFromPortfolio={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
