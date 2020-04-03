import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filterFlip: null,
    typeFilter: null
  }

  componentDidMount(){
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch(`http://localhost:3000/stocks`)
    .then(response => response.json())
    .then(stocks => this.setState({stocks}))
  }

  transactStock = (stockId, owner) => {
    if (owner === "public") {
      let purchasedStock = this.state.stocks.find(stock => stock.id === stockId)
      this.setState({
        portfolio: [...this.state.portfolio, purchasedStock]
      })
    } else if (owner === "portfolio") {
      this.setState({
        portfolio: [...this.state.portfolio.filter(stock => stock.id !== stockId)]
      }, console.log(this.state))
    }
  }

  handleChange = (event) => {
    this.setState({
      filterFlip: event.target.value.toLowerCase()
    })
  }

  handleDropDownChange = (event) => {
    this.setState({
      typeFilter: event.target.value
    })
  }
  
  render() {
    let stocksCopy = [...this.state.stocks]
    if (this.state.filterFlip === "alphabetically") {
      stocksCopy.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
    }
    if (this.state.filterFlip === "price") {
      stocksCopy.sort((stockA, stockB) => stockA.price - stockB.price)
    }
    if (this.state.typeFilter !== "None") {
      stocksCopy = stocksCopy.filter(stock => stock.type === this.state.typeFilter)
    }
    console.log(stocksCopy)
    return (
      <div>
        <Header />
        <MainContainer handleDropDownChange={this.handleDropDownChange} handleChange={this.handleChange} filters={this.state} stocks={stocksCopy} portfolio={this.state.portfolio} transactStock={this.transactStock}/>
      </div>
    );
  }
}

export default App;
