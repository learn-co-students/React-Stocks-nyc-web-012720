import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state ={
    stocks: [],
    portfolio: [],
    filter: "",
    checked: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({ stocks }))
  }

  addToPortfolio = stockId => {
    const stocks = this.state.stocks

    let addStock = stocks.find( stock => stock.id === stockId)
    let newList = stocks.filter( stock => stock.id !== stockId)

    this.setState({ 
      stocks: newList,
      portfolio: [...this.state.portfolio, addStock]
    })
  }

  removeStock = stockId => {
    const portfolio = this.state.portfolio

    let removeStock = portfolio.find( stock => stock.id === stockId)
    let newPortList = portfolio.filter( stock => stock.id !== stockId)

    this.setState({ 
      stocks: [...this.state.stocks, removeStock],
      portfolio: newPortList
    })
  }

  handleFilter = event => {
    this.setState({filter: event.target.value})
  }

  filteredStocks = () => {
    const stocks = this.state.stocks
    const filter = this.state.filter

    let displayStocks =  filter ? stocks.filter(stock => stock.type === this.state.filter) : stocks
    return displayStocks
  }

  handleChecked = event => {
    const stocks = this.state.stocks
    let sortedStocks = stocks

    if (event.target.value === "Alphabetically"){
      stocks.sort((a, b) => a.name.localeCompare(b.name))
    } else if (event.target.value === "Price"){
      stocks.sort((a, b) => a.price - b.price)
    }
    this.setState({stocks: sortedStocks, checked: event.target.value})
  }
  
  render() {   
    console.log(this.state)
    return (
      <div>
        <SearchBar 
          filter={this.state.filter}
          handleFilter={this.handleFilter}
          checked={this.state.checked}
          handleChecked={this.handleChecked}
        />
          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filteredStocks()} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
