import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
	state = {
		orgStocks: [],
		portfolioStocks: [],
		filteredStocks: "All",
		sortTerm: ""
	};
	componentDidMount() {
		fetch("http://localhost:3000/stocks")
			.then((resp) => resp.json())
			.then((stocks) => this.getStocks(stocks));
	}

	getStocks = (stocks) => {
		this.setState({ orgStocks: stocks });
		// console.log(this.state.orgStocks)
	};

	buyStock = (stock) => {
		this.setState((prevState) => {
			return {
				portfolioStocks: [...prevState.portfolioStocks, stock],
			};
		});
	};

	sellStock = (portStock) => {
		//
		let foundPort = this.state.portfolioStocks.indexOf(portStock);
		let portfolio = [...this.state.portfolioStocks];
		portfolio.splice(foundPort, 1);
		// portfolio.splice(foundPort,1)
		// this.setState({portfolioStocks: portfolio })
		this.setState({ portfolioStocks: portfolio });
	};

  filterStocks = (term) => {
    this.setState({filteredStocks: term})
    // console.log(this.state.filteredStocks)
  }

  whichStocksToRender = () => {
	let copiedStocks = [...this.state.orgStocks]

    if(this.state.filteredStocks=== "All"){
       copiedStocks = [...this.state.orgStocks]
    }else{
		copiedStocks = this.state.orgStocks.filter(stock => stock.type === this.state.filteredStocks)
	}

	if(this.state.sortTerm === "Price"){
		copiedStocks.sort((stockA,stockB) => {
			return stockA.price - stockB.price
		})
	}else if(this.state.sortTerm=== "Alphabetically"){
		copiedStocks.sort((stockA,stockB)=>{
			return stockB.name > stockA.name ? -1 : 1 
		})
	}
	return copiedStocks
  }

  sortedStocks = (term) => {
	this.setState({sortTerm: term})
	// console.log(this.state.sortTerm);
	// console.log(term)

  }
	render() {
		console.log(this.state.sortTerm);
		return (
			<div>
				<SearchBar filterStocks={this.filterStocks} 
					  term={this.state.filteredStocks}
					  sortedStocks={this.sortedStocks}
					  sortTerm={this.state.sortTerm}
        />

				<div className="row">
					<div className="col-8">
						<StockContainer
							orgStocks={this.whichStocksToRender()}
							buyStock={this.buyStock}
						/>
					</div>
					<div className="col-4">
						<PortfolioContainer
							portfolioStocks={this.state.portfolioStocks}
							sellStock={this.sellStock}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainContainer;
