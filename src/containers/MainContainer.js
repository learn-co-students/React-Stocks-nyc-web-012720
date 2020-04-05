import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stockUrl = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  state = {
    stocks: [],
    myPortfolio: [],
    displayStocks: []
  }

  componentDidMount(){
    fetch(stockUrl)
      .then(res => res.json())
      .then(stocks => this.setState({stocks, displayStocks:stocks}))
      .catch(err => console.log(err))
  }

  handleAdd = (id) => {
    const stockToAdd = this.state.stocks.find(stock => stock.id === id);
    this.setState({
      myPortfolio:[
        ...this.state.myPortfolio,
        stockToAdd
      ]
    })
  }
  
  handleRemove = (id) => {
    this.setState(prevState => {
      const myPortfolio = prevState.myPortfolio.filter(stock => stock.id !== id);
      return {myPortfolio};
    });
  }

  handleFilter = (event) => {
    event.persist()
    this.setState(prevState => {
      const displayStocks = prevState.stocks.filter(stock => stock.type === event.target.value);
      return {displayStocks};
    })
  }

  handleSort = (event) => {
    event.persist()
    let displayStocks = []
    switch (event.target.value) {
      case "Alphabetically":
      displayStocks = this.state.displayStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      break;
      case "Price":
      displayStocks = this.state.displayStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      break;
      default:
        displayStocks = this.state.displayStocks
        break;
    }
    this.setState({
      displayStocks
    })

  }

  render() {
    return (
      <div>
        <SearchBar onHandleFilter={this.handleFilter} onHandleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} onHandleAdd={this.handleAdd}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio={this.state.myPortfolio} onHandleRemove={this.handleRemove}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
