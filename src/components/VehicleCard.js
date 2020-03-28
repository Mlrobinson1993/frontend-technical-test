import React, { Component } from 'react';

class VehicleCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { imgSrc, name, price, description } = this.props;

		return (
			<div className='card'>
				<div className='card_image-container'>
					<img
						className='card_image-thumbnail'
						src={imgSrc}
						alt={`Image of the ${name}`}
					/>
				</div>
				<div className='card_text-container'>
					<span className='card_text-name'>Jaguar {name.toUpperCase()}</span>
					<span className='card_text-price'>From: {price}</span>
					<span className='card_text-description'>{description}</span>
				</div>
			</div>
		);
	}
}
export default VehicleCard;
