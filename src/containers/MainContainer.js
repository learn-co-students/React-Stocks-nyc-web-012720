import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state= {
    stocks: [],
    portfolio: [],
    filter: "All",
    sort: null,
    display: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({stocks, display: stocks}))
    .catch(err => console.log(err))
  }

  handleFilterChange = (event) => {
   this.setState({
     filter: event.target.value
   })
  }

  handleSortChange = (event) => {
    this.setState({
      sort: event.target.value
    })
  }

  filterStocks = () => {
    let stocks = this.state.stocks
    if (this.state.filter !== "All"){
      return [...stocks].filter(stock => stock.type === this.state.filter)
    } else
    return stocks
  }
  

  sortStocks = () => {
    let filtered = this.filterStocks()
    if (this.state.sort === "Alphabetically"){
      let alphabetized = [...filtered].sort((a,b)=> a.name.localeCompare(b.name))
      return alphabetized
    } if (this.state.sort === "Price"){
      return [...filtered].sort((a,b)=>{
        return a.price - b.price
      })
    }
    else return filtered
  }

  buyStock = (stock) => {
    this.setState({portfolio: [...this.state.portfolio, stock]})
  }

  sellStock = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio.filter(s => s !== stock )]
    })
  }

  render() {

    return (
      <div>
        <SearchBar 
          handleSortChange={this.handleSortChange}
          sort={this.state.sort} 
          handleFilterChange={this.handleFilterChange}
          filter={this.state.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.sortStocks()} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
