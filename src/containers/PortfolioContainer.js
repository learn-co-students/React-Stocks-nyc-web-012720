import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderPortfolio = () => {
    // console.log(this.props)
    return this.props.portfolioStocks.map((stock, index) => {
  return <Stock key={`${index} ${stock.name}`} {...stock} handleClick={()=>this.props.sellStock(stock)}/>
})
  }
  render() {
    // console.log(this.props.stocks)
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderPortfolio()}
            
          
      </div>
    );
  }

}

export default PortfolioContainer;
