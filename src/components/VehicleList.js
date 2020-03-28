import React, { Component } from 'react';
import { getData } from '../api';
import VehicleCard from './VehicleCard';

export default class VehicleList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDataVisible: false,
		};
	}
	componentDidMount() {
		getData(data => {
			this.setState({
				data,
			});
		});
	}

	render() {
		const handleDisplayData = () => {
			this.setState({
				isDataVisible: true,
			});
		};

		return (
			<div className='vehicle_list'>
				{this.state.isDataVisible ? (
					this.state.data.map((vehicle, key) => (
						<VehicleCard
							key={vehicle.vehicleID}
							name={vehicle.vehicleID}
							imgSrc={vehicle.vehicleImg}
							price={vehicle.vehiclePrice}
							description={vehicle.vehicleDescription}
						/>
					))
				) : (
					<button type='button' onClick={handleDisplayData}>
						Submit
					</button>
				)}
			</div>
		);
	}
}
