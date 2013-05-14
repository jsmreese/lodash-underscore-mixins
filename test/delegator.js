$(document).ready(function() {

	// set up delegator function
	var delegator = _.delegator({
		"A": function () {
			var args = [].slice.call(arguments);
			return "A: " + args.join(", ");
		},
		"B": function () {
			var args = [].slice.call(arguments);
			return "B: " + args.join(", ");
		},
		"C": function () {
			var args = [].slice.call(arguments);
			return "C: " + args.join(", ");
		},
	}, "A");
	
	// tests
	module('Delegator');

	test("default case", function () {
		equal(delegator(), "A: ");
	});

	test("cases with arguments", function () {
		equal(delegator("A", 0, 1, 2, 3), "A: 0, 1, 2, 3");
		equal(delegator("B", 0, 1, 2, 3), "B: 0, 1, 2, 3");
		equal(delegator("C", 0, 1, 2, 3), "C: 0, 1, 2, 3");
	});

	test("case that is not in cases", function () {
		equal(delegator("D"), "A: ");
		equal(delegator("D", 0, 1, 2, 3), "A: 0, 1, 2, 3");
	});

	test("hasCase", function () {
		equal(delegator.hasCase("A"), true);
		equal(delegator.hasCase("D"), false);
	});
	
	test("defaultCaseKey", function () {
		equal(delegator.defaultCaseKey(), "A");
		delegator.defaultCaseKey("B")
		equal(delegator.defaultCaseKey(), "B");
		equal(delegator(), "B: ");	});

	test("extendCases", function () {
		// extend cases
		delegator.extendCases({ "E": function () { return "CASE E"; } })
		equal(delegator.hasCase("E"), true);
		equal(delegator("E"), "CASE E");
		equal(delegator("E", 0, 1, 2, 3), "CASE E");
	});

	test("thisArg", function () {
		// setup obj for thisArg
		var obj = { key: "value" };
		
		// extend cases
		delegator.extendCases({ "F": function (arg) { return this[arg]; } })
		
		// set thisArg
		delegator.thisArg(obj);
		
		equal(delegator.hasCase("F"), true);
		equal(delegator("F", "key"), "value");
	});
});
