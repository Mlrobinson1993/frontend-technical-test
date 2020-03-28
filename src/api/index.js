/**
 * This is an example request. Create your own using best practises for
 * handling asynchronous data fetching
 **/

const getData = func => {
	const vehicles = [];
	const data = fetch('http://localhost:9988/api/vehicle')
		.then(res => res.json())
		.then(data => {
			data.vehicles.map(vehicle => {
				fetch(`http://localhost:9988/api/vehicle/${vehicle.id}`)
					.then(res => res.json())
					.then(data => {
						vehicles.push({
							vehicleID: vehicle.id,
							vehicleImg: vehicle.media[0].url,
							vehiclePrice: data.price,
							vehicleDescription: data.description,
						});
					});
			});
		});
	func(vehicles);
};

export { getData };
