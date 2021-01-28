d3.select('#new-note').on('submit', () => {
	d3.event.preventDefault();
	const input = d3.select('input');
	d3
		.select('#notes')
		.append('p')
		.classed('note', true)
		.text(input.property('value'));
	input.property('value', '');
});

d3.selectAll('p').on('click', () => {
	d3.select('p').remove();
});
