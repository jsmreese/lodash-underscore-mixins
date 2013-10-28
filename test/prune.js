$(document).ready(function() {

	// tests
	module('Prune');

	test("remove properties with empty string and object values", function () {
		deepEqual(_.prune({
			a: "",
			b: 123,
			c: 0,
			d: null,
			e: undefined,
			f: NaN,
			g: true,
			h: false,
			i: {},
			j: [],
			k: "string",
			l: "",
			m: {
				m1: "",
				m2: ""
			}
		}), {
			b: 123,
			c: 0,
			d: null,
			e: undefined,
			f: NaN,
			g: true,
			h: false,
			j: [],
			k: "string",
			m: {
				m1: "",
				m2: ""
			}
		});
	});
});
