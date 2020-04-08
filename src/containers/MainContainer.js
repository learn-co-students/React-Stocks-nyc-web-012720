import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  state = {
    originalList: [],
    stocks: [],
    boughtStocks: [] 
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({stocks: data, originalList: data}))
  }

  handleBuyStock = (stock) => {
    this.setState(prevState => ({boughtStocks: [...prevState.boughtStocks, stock]}))
  }

  handleSellStock = (stockIndex) => {
    const newBoughtStocks = this.state.boughtStocks.slice(0, stockIndex).concat(this.state.boughtStocks.slice((stockIndex + 1), this.state.boughtStocks.length -1))
    this.setState({boughtStocks: newBoughtStocks})
  }  

  sortByPrice = () => {
    this.setState({stocks: this.state.stocks.sort((a, b) => a.price > b.price ? 1 : -1)})
  }

  sortAlphabetically = () => {
    this.setState({stocks: this.state.stocks.sort((a, b) => a.name > b.name ? 1 : -1)})
  }

  sortStocks = (e) => {
    if (e.target.value === 'Alphabetically') {
      return this.sortAlphabetically()
    } else if (e.target.value === 'Price') {
      return this.sortByPrice()
    } 
  }

  filterByType = (e) => {
    const filtered = this.state.originalList.filter(stock => stock.type === e.target.value)

    if (e.target.value !== 'All') {
      this.setState({stocks: filtered})
    } else {
      this.setState(prevState => ({stocks: prevState.originalList}))
    }
  }

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterByType={this.filterByType}/>

          <div className="row">
            <div className="col-8">

            <StockContainer stocks={this.state.stocks} handleBuyStock={this.handleBuyStock} />

            </div>
            <div className="col-4">

            <PortfolioContainer boughtStocks={this.state.boughtStocks} handleSellStock={this.handleSellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
