const width = 800;
const height = 600;
const padding = 50;
const barPadding = 1;
const ageData = regionData.filter((d) => d.medianAge !== null);

const initialBinCount = 16;

const svg = d3.select('svg').attr('height', height).attr('width', width);

d3.select('input').property('value', initialBinCount).on('input', () => {
	updateRects(+d3.event.target.value);
});

svg
	.append('g')
	.attr('transform', `translate(0, ${height - padding})`)
	.classed('x-axis', true);

svg
	.append('g')
	.attr('transform', `translate(${padding},0)`)
	.classed('y-axis', true);

svg
	.append('text')
	.attr('x', width / 2)
	.attr('y', height - 10)
	.style('text-anchor', 'middle')
	.text('Median Age');

svg
	.append('text')
	.attr('transform', 'rotate(-90)')
	.attr('x', -height / 2)
	.attr('y', 15)
	.style('text-anchor', 'middle')
	.text('Frequency');

updateRects(initialBinCount);

function updateRects(val) {
	const xScale = d3
		.scaleLinear()
		.domain(d3.extent(ageData, (d) => d.medianAge))
		.rangeRound([ padding, width - padding ]);

	const histogram = d3
		.histogram()
		.domain(xScale.domain())
		.thresholds(xScale.ticks(val))
		.value((d) => d.medianAge);

	let bins = histogram(ageData);

	const yScale = d3
		.scaleLinear()
		.domain([ 0, d3.max(bins, (d) => d.length) ])
		.range([ height - padding, padding ]);

	d3.select('.y-axis').call(d3.axisLeft(yScale));

	d3
		.select('.x-axis')
		.call(d3.axisBottom(xScale).ticks(val))
		.selectAll('text')
		.attr('y', -3)
		.attr('x', 10)
		.attr('transform', 'rotate(90)')
		.style('text-anchor', 'start');

	const rect = svg.selectAll('rect').data(bins);

	rect.exit().remove();

	rect
		.enter()
		.append('rect')
		.merge(rect)
		.attr('x', (d) => xScale(d.x0))
		.attr('y', (d) => yScale(d.length))
		.attr('height', (d) => height - padding - yScale(d.length))
		.attr('width', (d) => xScale(d.x1) - xScale(d.x0) - barPadding)
		.attr('fill', 'blue');

	d3.select('.bin-count').text(`Number of bins: ${bins.length}`);
}
