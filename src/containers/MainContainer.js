import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
  state = {
    stocks: [], 
    originalList: [], 
    portfolioStocks: [], 
    sortBy: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          stocks: data, 
          originalList: data
        })
      })
  }

  // on click, buy stock (add this stock to existing array of portfolioStocks)
  handleBuyStock = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  // when you click on a stock in portfolio, it is removed from the array of portfolioStocks
  // use the filter method to filter out the selected stock => keep the stocks that are not the selected one
  handleSellStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(newPortfolioStocks => newPortfolioStocks !== stock)
    })
  }

 handleSortByChange = (event) => {
   if (event.target.value === "Alphabetically") {
      this.setState({
        sortBy: "Alphabetically"
      })
      this.sortAlphabetic()
    } else if (event.target.value === "Price") {
      this.setState({
        sortBy: "Price"
      })
      this.sortByPrice()
    }
  }

  sortAlphabetic = () => {
    this.state.stocks.sort((stockA, stockB) => stockA.name > stockB.name ? 1 : -1)
    // this.state.stocks.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
  }

  // sort by ascending price (lowest to highest)
  sortByPrice = () => {
    this.state.stocks.sort((stockA, stockB) => stockA.price - stockB.price)
  }

  // based on event.target.value, render only the selected type
  handleFilterBy = (event) => {
    let filteredStocks = this.state.originalList.filter(stock => stock.type === event.target.value)
    if (event.target.value !== "All") {
      this.setState({
        stocks: filteredStocks
      })
    } else {
      this.setState({
        stocks: this.state.originalList
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          sortBy={this.state.sortBy}
          handleSortByChange={this.handleSortByChange}
          handleFilterBy={this.handleFilterBy}
        />

          <div className="row">
            <div className="col-8">

            <StockContainer
              stocks={this.state.stocks}
              handleBuyStock={this.handleBuyStock}
            />

            </div>
            <div className="col-4">

            <PortfolioContainer
              portfolioStocks={this.state.portfolioStocks} 
              handleSellStock={this.handleSellStock}
            />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
