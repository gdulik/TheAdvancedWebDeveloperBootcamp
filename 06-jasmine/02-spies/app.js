function add(a, b, c) {
	return a + b + c;
}

describe('add', () => {
	let addSpy,
		result = null;
	beforeEach(() => {
		addSpy = spyOn(window, 'add').and.callThrough();
		result = addSpy(1, 2, 3);
	});
	it('is can have params tested', () => {
		expect(addSpy).toHaveBeenCalled();
		expect(addSpy).toHaveBeenCalledWith(1, 2, 3);
		expect(addSpy.calls.any()).toBe(true);
		expect(addSpy.calls.count()).toBe(1);
		expect(result).toEqual(6);
	});
});
