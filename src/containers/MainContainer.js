import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar filters={this.props.filters} handleChange={this.props.handleChange} handleDropDownChange={this.props.handleDropDownChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} transactStock={this.props.transactStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.props.portfolio} transactStock={this.props.transactStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
