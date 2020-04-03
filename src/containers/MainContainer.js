import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
  state = {
    stocks: [],
    myStocks: [],
    filterStocks: [],
    togglefilter: false,
    selectedOption: 'Alphabetically',
  };
  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then((response) => response.json())
      .then((stocks) => this.setState({ stocks }));
  }

  buyStock = (stock) => {
    let clone = this.state.myStocks;
    let findDuplicate = clone.find((double) => double.id === stock.id);

    if (clone.length === 0 || !findDuplicate) {
      clone.push(stock);
      this.setState({ myStocks: clone }, () =>
        console.log(this.state.myStocks)
      );
    } else if (findDuplicate) {
      alert('already addit');
    }
  };
  sellStock = (stock) => {
    let clone = this.state.myStocks;
    let findDuplicate = clone.find((double) => double.id === stock.id);
    let index = clone.indexOf(findDuplicate);
    clone.splice(index, 1);
    this.setState({ myStocks: clone }, () => console.log(this.state.myStocks));
  };
  sortStocks = (event, sorted) => {
    this.setState({ stocks: sorted, selectedOption: event.target.value });
  };
  filterStocks = (event) => {
    let filterStocks = this.state.stocks.filter((stock) => {
      return stock.type === event.target.value;
    });
    console.log(filterStocks);
    this.setState({ filterStocks, togglefilter: true });
  };
  render() {
    return (
      <div>
        <SearchBar
          stocks={this.state.stocks}
          sortStocks={this.sortStocks}
          selectedOption={this.state.selectedOption}
          filterStocks={this.filterStocks}
        />

        <div className='row'>
          <div className='col-8'>
            <StockContainer
              stocks={
                this.state.togglefilter
                  ? this.state.filterStocks
                  : this.state.stocks
              }
              buyStock={this.buyStock}
            />
          </div>
          <div className='col-4'>
            <PortfolioContainer
              myStocks={this.state.myStocks}
              sellStock={this.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
