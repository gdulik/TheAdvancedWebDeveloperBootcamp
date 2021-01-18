describe('a simple setTimeout', () => {
	let sample;
	beforeEach(() => {
		sample = jasmine.createSpy('sampleFunction');
		jasmine.clock().install();
	});
	afterEach(() => {
		jasmine.clock().uninstall();
	});
	it('is only invoked after 1000 ms', () => {
		setTimeout(() => {
			sample();
		}, 1000);
		jasmine.clock().tick(999);
		expect(sample).not.toHaveBeenCalled();
		jasmine.clock().tick(1);
		expect(sample).toHaveBeenCalled();
	});
});

describe('a simple setInterval', () => {
	let dummyFunction;
	beforeEach(() => {
		dummyFunction = jasmine.createSpy('dummyFunction');
		jasmine.clock().install();
	});
	afterEach(() => {
		jasmine.clock().uninstall();
	});
	it('checks to see the number of times the function is invoked', () => {
		setInterval(() => {
			dummyFunction();
		}, 1000);
		jasmine.clock().tick(999);
		expect(dummyFunction.calls.count()).toBe(0);
		jasmine.clock().tick(1000);
		expect(dummyFunction.calls.count()).toBe(1);
		jasmine.clock().tick(1);
		expect(dummyFunction.calls.count()).toBe(2);
	});
});
