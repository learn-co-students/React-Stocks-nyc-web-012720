import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    stocksCopy: [],
    portfolio: [], 
    sort: 'name'
  }

  componentDidMount() {
    fetch('http://localhost:4000/stocks')
    .then(response => response.json())
    .then(data => {
      this.setState({stocks: data})
      this.setState({stocks: this.sort(this.state.sort), stocksCopy: this.sort(this.state.sort)})
    })
  }

  addToPortfolio = (stock) => {
    if (!this.state.portfolio.includes(stock)){
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    } 
  }

  removeFromPortfolio = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(removeStock => stock !== removeStock)
    })
  }

  sort = (type) => {
    let sorted = this.state.stocks.sort((a,b) => a[type] > b[type] ? 1 : -1)
    return sorted
  }

  sortIt = (type) => {
    if (this.state.sort === "name") {
      this.setState({
        stocks: this.sort(type), 
        sort: "price"})
    } else if (this.state.sort === "price"){
      this.setState({
        stocks: this.sort(type), 
        sort: "name"
      })
    } 
  }

  filter = (event) => {   
    if (event.target.value !== "All") {
      let filtered = this.state.stocksCopy.filter(stock => stock.type === event.target.value)
      return this.setState({stocks: filtered})
    } 
    return this.setState({stocks: this.state.stocksCopy})
  }

  render() {
    return (
      <div>
        <SearchBar filter={(event) => this.filter(event)} sort={this.state.sort} sortIt={this.sortIt} />
        
          <div className="row">
            <div className="col-8">
              <StockContainer addToPortfolio={this.addToPortfolio} stocks={this.state.stocks}/>
            </div>

            <div className="col-4">
              <PortfolioContainer removeFromPortfolio={this.removeFromPortfolio} portfolioStocks={this.state.portfolio}/>
            </div>

          </div>
      </div>
    );
  }

}

export default MainContainer;
