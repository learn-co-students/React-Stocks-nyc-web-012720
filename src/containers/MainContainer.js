import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    myPortfolio: [],
    sort: "",
    filter: "All"
  }

  componentDidMount() {
    fetch(`http://localhost:3000/stocks`)
    .then(resp => resp.json())
    .then(stocks => { this.setState({ stocks: stocks })
    })
  }

  //Filter Options

  filteredStocks = () => {
    console.log("hi")
    let stocks = this.state.stocks
    if (this.state.filter === "All") {
      return stocks
    }
    if (this.state.filter === "Tech") {
      return stocks.filter( x => x.type === "Tech")
    }
    if (this.state.filter === "Sportswear") {
      return stocks.filter( x => x.type === "Sportswear")
    }
    if (this.state.filter === "Finance") {
      return stocks.filter( x => x.type === "Finance")
    }
  }

  handleFilter = (value) => {
    this.setState({
      filter: value
    })
  }

  // Sorting Functions

   sortHandler(option) {
    let stocks = this.state.stocks
    let newSort = stocks.sort((a, b) => a[option] > b[option] ? 1 : -1)
    console.log(newSort)
      return newSort
   }

   sortByName = () => {
     this.setState({
       stocks: this.sortHandler("name"),
       sort: "Alphabetically"
     })
   }

   sortByPrice = () => {
    this.setState({
      stocks: this.sortHandler("price"),
      sort: "Price"
    })
   }


   //

  addToPort = (stock) => {
    if (!this.state.myPortfolio.includes(stock)) {
        this.setState({
          myPortfolio: [...this.state.myPortfolio, stock]
        })
    }
  }

  removePort = (stock) => {
    // this.state.myPortfolio.splice(this.state.myPortfolio.indexOf(stock), 1)
      this.setState({
        myPortfolio: this.state.myPortfolio.filter(s => stock !==s )
      })
    }

      // one click handling both functions, (so it doesnt matter which side you click the stock on, it will 
  // work as an add/remove anywhere)

  // handleStockClick = stock => {
  //   if (!this.state.myPortfolio.includes(stock)) {
  //     this.setState({
  //       myPortfolio: [...this.state.myPortfolio, stock]
  //     }) 
  //   } else {
  //     this.state.myPortfolio.splice(this.state.myPortfolio.indexOf(stock), 1)
  //     this.setState({
  //       myPortfolio: [...this.state.myPortfolio]
  //     })
  //   }
  //   }

  render() {
    console.log(this.state.myPortfolio)
    return (
      <div>
        <SearchBar 
          sortByName={this.sortByName} 
          sortByPrice={this.sortByPrice}
          sort={this.state.sort}
          filter={this.handleFilter}
          />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filteredStocks()}
                              // handleStockClick={this.handleStockClick}
                              addToPort={this.addToPort}
                              
              />

            </div>
            <div className="col-4">

              <PortfolioContainer portStocks={this.state.myPortfolio}
                                  // handleStockClick={this.handleStockClick}
                                  removePort={this.removePort}
                                  
              
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
