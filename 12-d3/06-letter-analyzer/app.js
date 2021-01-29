d3.select('form').on('submit', () => {
	d3.event.preventDefault();
	const input = d3.select('input');
	countChars(input.property('value'));
	input.property('value', '');
});

function countChars(text) {
	d3.select('#phrase').text(`Analysis of: ${text}`);
	d3.select('#count').text(`(New characters: ${text.length})`);

	d3
		.select('#letters')
		.append('div')
		.classed('letter', true)
		.classed('new', true)
		.text(d.character)
		.style('width', '20px')
		.style('height', `${d.count * 20}px`)
		.style('line-height', '20px')
		.style('margin-right', '5px');
}

[
	{
		character: 'h',
		count: 1
	}
];

function getFrequencies(str) {
	const strArr = str.split('').sorted();
	const data = [];
}
