d3
	.queue()
	.defer(d3.json, './countries.json')
	.defer(d3.csv, './simplemaps-worldcities-basic.csv', (row) => {
		if (row.pop < 10000) return;
		return {
			cityName: row.city,
			countryCode: row.iso2,
			population: row.pop
		};
	})
	.awaitAll((error, allData) => {
		if (error) throw new Error();
		const data = allData[0].geonames.map((country) => {
			country.cities = allData[1].filter(
				(city) => city.countryCode === country.countryCode
			);
			return country;
		});
		const countrySelection = d3
			.select('body')
			.selectAll('div')
			.data(data)
			.enter()
			.append('div');
		countrySelection.append('h3').text((d) => d.countryName);
		countrySelection.append('ul').html((d) =>
			d.cities
				.map((city) => {
					const percentage = city.population / d.population * 100;
					return `<li>${city.cityName} - ${percentage.toFixed(
						2
					)}%</li>`;
				})
				.join('')
		);
	});
