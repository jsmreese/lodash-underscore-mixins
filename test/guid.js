$(document).ready(function() {

	// tests
	module('Guid');

	test("string pattern match", function () {
		ok(/^[0-9a-f]{8}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{12}$/.test(_.guid()));
	});
});
