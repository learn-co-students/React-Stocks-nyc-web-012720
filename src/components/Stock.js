import React from 'react'

const Stock = props => {
	console.log(props, 'stock card props')
	return (
		<div>
			<div
				className="card"
				onClick={() =>
					props.addToPortfolio
						? props.addToPortfolio(props.stock)
						: props.removeFromPortfolio(props.stock)
				}
			>
				<div className="card-body">
					<h5 className="card-title">{props.stock.name}</h5>

					<p className="card-text">{props.stock.price}</p>
				</div>
			</div>
		</div>
	)
}

export default Stock
