const minYear = d3.min(birthData, (d) => d.year);
const maxYear = d3.max(birthData, (d) => d.year);
const width = 600;
const height = 600;
const padding = 40;

const months = [];
for (let i = 0; i < birthData.length; i++) {
	const month = birthData[i].month;
	if (!months.includes(month)) months.push(month);
}

const colorScale = d3
	.scaleOrdinal()
	.domain(months)
	.range([
		'#aec7e8',
		'#a7cfc9',
		'#9fd7a9',
		'#98df8a',
		'#bac78e',
		'#ddb092',
		'#dd9896',
		'#dda48c',
		'#ffaf82',
		'#ffbb78',
		'#e4bf9d',
		'#c9c3c3'
	]);

const quarterColors = [ '#1f77b4', '#2ca02c', '#d62728', '#ff7f0e' ];

const svg = d3.select('svg').attr('width', width).attr('height', height);

svg
	.append('g')
	.attr('transform', `translate(${width / 2},${height / 2})`)
	.classed('chart', true);

svg
	.append('g')
	.attr('transform', `translate(${width / 2},${height / 2})`)
	.classed('inner-chart', true);

svg
	.append('text')
	.attr('x', width / 2)
	.attr('y', '30')
	.style('text-anchor', 'middle')
	.style('font-size', '2em');

d3
	.select('input')
	.property('min', minYear)
	.property('max', maxYear)
	.property('value', minYear)
	.on('input', () => {
		makeGraph(+d3.event.target.value);
	});

makeGraph(minYear);

function makeGraph(year) {
	const yearData = birthData.filter((d) => d.year === year);
	const arcs = d3
		.pie()
		.value((d) => d.births)
		.sort((a, b) => months.indexOf(a.month) - months.indexOf(b.month));
	const innerArcs = d3
		.pie()
		.value((d) => d.births)
		.sort((a, b) => months.indexOf(a.quarter) - months.indexOf(b.quarter));
	const path = d3
		.arc()
		.outerRadius(width / 2 - padding)
		.innerRadius(width / 4);
	const innerPath = d3.arc().outerRadius(width / 4).innerRadius(0);
	const outer = d3.select('.chart').selectAll('.arc').data(arcs(yearData));
	const inner = d3
		.select('.inner-chart')
		.selectAll('.arc')
		.data(innerArcs(getDataByQuarter(yearData)));

	outer
		.enter()
		.append('path')
		.classed('arc', true)
		.attr('fill', (d) => colorScale(d.data.month))
		.merge(outer)
		.attr('d', path);

	inner
		.enter()
		.append('path')
		.classed('arc', true)
		.attr('fill', (d, i) => quarterColors[i])
		.merge(inner)
		.attr('d', innerPath);

	d3.select('text').text(`Births by months and quarter for ${year}`);
}

function getDataByQuarter(data) {
	const quarterTallies = [ 0, 1, 2, 3 ].map((n) => ({
		quarter: n,
		births: 0
	}));
	for (let i = 0; i < data.length; i++) {
		const row = data[i];
		const quarter = Math.floor(months.indexOf(row.month) / 3);
		quarterTallies[quarter].births += row.births;
	}
	return quarterTallies;
}
