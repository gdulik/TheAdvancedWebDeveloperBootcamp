const width = 500;
const height = 500;
const padding = 30;

const yScale = d3
	.scaleLinear()
	.domain(d3.extent(birthData2011, (d) => d.lifeExpectancy))
	.range([ height - padding, padding ]);

const xScale = d3
	.scaleLinear()
	.domain(d3.extent(birthData2011, (d) => d.births / d.population))
	.range([ padding, width - padding ]);

const xAxis = d3
	.axisBottom(xScale)
	.tickSize(-height + 2 * padding)
	.tickSizeOuter(0);
const yAxis = d3
	.axisLeft(yScale)
	.tickSize(-width + 2 * padding)
	.tickSizeOuter(0);

const colorScale = d3
	.scaleLinear()
	.domain(d3.extent(birthData2011, (d) => d.population / d.area))
	.range([ 'lightgreen', 'black' ]);

const radiusScale = d3
	.scaleLinear()
	.domain(d3.extent(birthData2011, (d) => d.births))
	.range([ 2, 40 ]);

const tooltip = d3.select('body').append('div').classed('tooltip', true);

d3
	.select('svg')
	.append('g')
	.call(xAxis)
	.attr('transform', `translate(0,${height - padding})`);

d3
	.select('svg')
	.append('g')
	.call(yAxis)
	.attr('transform', `translate(${padding},0)`);

d3
	.select('svg')
	.attr('width', width)
	.attr('height', height)
	.selectAll('circle')
	.data(birthData2011)
	.enter()
	.append('circle')
	.attr('cx', (d) => xScale(d.births / d.population))
	.attr('cy', (d) => yScale(d.lifeExpectancy))
	.attr('fill', (d) => colorScale(d.population / d.area))
	.attr('r', (d) => radiusScale(d.births))
	.on('mousemove', showTooltip)
	.on('touchstart', showTooltip)
	.on('mouseout', hideTooltip)
	.on('touchend', hideTooltip);

d3
	.select('svg')
	.append('text')
	.attr('x', width / 2)
	.attr('y', height - padding)
	.attr('dy', '1.5em')
	.style('text-anchor', 'middle')
	.text('Births per Capita');

d3
	.select('svg')
	.append('text')
	.attr('x', width / 2)
	.attr('y', padding)
	.style('text-anchor', 'middle')
	.style('font-size', '1.5em')
	.text('Data on Births by Country in 2011');

d3
	.select('svg')
	.append('text')
	.attr('transform', 'rotate(-90)')
	.attr('x', -height / 2)
	.attr('y', padding)
	.attr('dy', '-1.1em')
	.style('text-anchor', 'middle')
	.text('Life Expectancy');

function showTooltip(d) {
	tooltip
		.style('opacity', 1)
		.style('left', `${d3.event.x - tooltip.node().offsetWidth / 2}px`)
		.style('top', `${d3.event.y + 25}px`).html(`
			<p>Region: ${d.region}</p>
			<p>Births: ${d.births.toLocaleString()}</p>
			<p>Population: ${d.population.toLocaleString()}</p>
			<p>Area: ${d.area.toLocaleString()}</p>
			<p>Life Epectancy: ${d.lifeEpectancy}</p>
		`);
}
function hideTooltip() {
	tooltip.style('opacity', 0);
}
