import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayed: [],
    portfolio: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(data => {
      this.setState({
        stocks: data,
        displayed: data
      })
    })
  }

  addPortfolio = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  removeStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(st => st !== stock) 
    })
  }

  filterStocks = (type) => {
    if(type !== "all"){
      this.setState({
        displayed: this.state.stocks.filter(stock => stock.type === type)        
      })
    }else{
      this.setState({
        displayed: this.state.stocks
      })
    }
  }

  sortStocks = (sortBy) => {
    console.log(sortBy)

    let sorted = []

    if(sortBy === 'Alphabetically'){
      sorted = this.state.displayed.sort((a,b) => a.name > b.name ? 1 : -1 )
    }else{
      sorted = this.state.displayed.sort((a,b) => a.price > b.price ? 1 : -1 )
    }
    this.setState({
      displayed: sorted
    })
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayed} addPortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
