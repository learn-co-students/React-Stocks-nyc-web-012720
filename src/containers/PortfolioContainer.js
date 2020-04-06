import React, {Component} from 'react'
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
	render() {
		const myPortfolio = this.props.myPortfolio
		return (
			<div>
				<h2>My Portfolio</h2>
				{myPortfolio.map(stock => (
					<Stock
						stock={stock}
						removeFromPortfolio={this.props.removeFromPortfolio}
					/>
				))}
			</div>
		)
	}
}

export default PortfolioContainer
