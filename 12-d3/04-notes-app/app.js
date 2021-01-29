const input = d3.select('input');
const preview = d3.select('.preview');

d3.select('#new-note').on('submit', () => {
	d3.event.preventDefault();
	d3
		.select('#notes')
		.append('p')
		.classed('note', true)
		.text(input.property('value'));
	input.property('value', '');
	setPreview('');
});

d3.select('#remove-notes').on('click', () => {
	d3.selectAll('.note').remove();
});

d3.select('#feeling-lucky').on('click', () => {
	d3
		.selectAll('.note')
		.style('font-size', () => `${Math.random() * 20 + 10}px`);
});

input.on('input', () => {
	const note = d3.event.target.value;
	setPreview(note);
});

function setPreview(val) {
	preview.text(val).classed('hide', val === '');
}
