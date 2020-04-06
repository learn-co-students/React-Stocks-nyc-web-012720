import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  state = {
    stocks: [],
    myPortfolio: [],
    displayStocks: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(result => {this.setState({stocks: result, displayStocks: result})})
  }

  componentDidUpdate(){
    console.log(this.state.stocks, 'update stocks state')
    console.log(this.state.myPortfolio, 'update portfolio state')
    console.log(this.state.displayStocks, 'update display stock state')
  }

  viewState = () => {
    console.log(this.state)
  }


  addToPortfolio = (stock) => {
      this.setState({
        myPortfolio: [...this.state.myPortfolio, stock]
      })
    }

  removeFromPortfolio = (stock) => {
    this.setState({
      myPortfolio: this.state.myPortfolio.filter(stocks => stocks !== stock)
    })
  }

  sortStocks = (sortBy) => {
    let sortedArray = []
    if (sortBy === "Alphabetically") {
      sortedArray = this.state.displayStocks.sort((a, b) => a.name > b.name ? 1 : -1)
    }
    else if (sortBy === "Price") {
      sortedArray = this.state.displayStocks.sort((a,b) => a.price > b.price ? 1 : -1)
    }
    else {
      console.log("Not a valid sort option")
      sortedArray = this.state.stocks
  }
    this.setState({displayStocks: sortedArray})
  }

  filterStocks = (type) => {
    let filteredArray = []
    if (type === "All") {
      filteredArray = this.state.stocks
    }
    else {
      filteredArray = this.state.stocks.filter(stock => stock.type === type)
    }
    this.setState({displayStocks: filteredArray})
  }

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer  stocks={this.state.displayStocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio={this.state.myPortfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
