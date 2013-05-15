# mixins for lodash and underscore

## _.collate(array, propertyName)

_collate addresses the problem of grouping arrays of data 
when the **order of the original array is important**._

The existing lodash/underscore mixins handing 
grouping of data destroy the order and/or have
strange effects when the data is numeric or is strings that
coerce to numbers (groupBy, for example).

collate will subdivide an array based on changes in the value of a particular property.
The propertyName argument may be a number, for use with arrays of arrays,
or a string, for use with arrays of objects.
proertyName can also be a function, in which case, subdivisions are created based on 
changes in the return value of the given function.

collate accepts an array of propertyNames (which may contain mixed numbers, strings, or functions) 
for easy multi-level collation in a single call.

### Example usage
#### Array of objects
	
```js
var cities = [
	{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 },
	{ city: "New York City", country: "USA", population: 8244910, census: 2011 },
	{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 },
	{ city: "Chicago", country: "USA", population: 2707120, census: 2012 }
];

//	propertyName is a string
var collatedCities = _.collate(cities, "country");
=>
[
	[
		{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 }
	],
	[
		{ city: "New York City", country: "USA", population: 8244910, census: 2011 },
		{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 },
		{ city: "Chicago", country: "USA", population: 2707120, census: 2012 }
	]
]

// propertyName is a function
var collatedCities = _.collate(cities, 
	function (item, index) { return Math.floor(item.population / 1000000); }
);
=>
[
	[
		{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 },
		{ city: "New York City", country: "USA", population: 8244910, census: 2011 }
	],
	[
		{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 }
	],
	[
		{ city: "Chicago", country: "USA", population: 2707120, census: 2012 }
	]
]
```
	
#### Array of arrays

```js
var data = [
	[ 0, "0", "aaa"],
	[ 0, "0", "aaa"],
	[ 0, "1", "aab"],
	[ 1, "2", "abb"],
	[ 1, "2", "abc"],
	[ 1, "3", "abc"]
];

//	propertyName is a number
var collatedData = _.collate(data, 0);
=>
[
	[
		[ 0, "0", "aaa"],
		[ 0, "0", "aaa"],
		[ 0, "1", "aab"]
	],
	[
		[ 1, "2", "abb"],
		[ 1, "2", "abc"],
		[ 1, "3", "abc"]
	]
]

//	propertyName is a string that will coerce to a number
var collatedData = _.collate(data, "0");
=>
[
	[
		[ 0, "0", "aaa"],
		[ 0, "0", "aaa"],
		[ 0, "1", "aab"]
	],
	[
		[ 1, "2", "abb"],
		[ 1, "2", "abc"],
		[ 1, "3", "abc"]
	]
]

//	propertyName is a function
var collatedData = _.collate(data,
	function (item, index) { return item[2].slice(2) }
);
=>
[
	[
		[ 0, "0", "aaa"],
		[ 0, "0", "aaa"]
	],
	[
		[ 0, "1", "aab"],
		[ 1, "2", "abb"]
	],
	[
		[ 1, "2", "abc"],
		[ 1, "3", "abc"]
	]
]

// propertyName is an array
var collatedData = _.collate(data, [
	0,
	function (item, index) { return item[2].slice(2) }
]);
=>
[
	[
		[
			[ 0, "0", "aaa"],
			[ 0, "0", "aaa"]
		],
		[
			[ 0, "1", "aab"]
		]
	],
	[
		[
			[ 1, "2", "abb"]
		],
		[
			[ 1, "2", "abc"],
			[ 1, "3", "abc"]
		]
	]
]
```

## _.delegator(cases, defaultCaseKey [, thisArg])
_delegator returns a function object that acts as a delegator for method look-up.
The delegator function object is intended to be used as **a configurable replacement for switch statements**._

_delegator is inspired by and substantially copied from https://github.com/rwldrn/idiomatic.js/_

The returned delegator function uses its first argument as the case key.
All other arguments passed to the delegator function are passed directly through to the delegate method.

cases must be an object containing method functions.
defaultCaseKey is the name of the key containing the default method, which will be used when no case key is provided, or when the provided case key cannot be found in the cases object.
thisArg is an optional "this" argument to be used as the context for case method evaluation.

The delegator function object has three getter/setter methods to access the private cases:
```js
// getters
.cases()
.defaultCaseKey()
.thisArg()

// setters
.cases(obj)
.defaultCaseKey(key)
.thisArg(obj)
```

The delegator function object has two utility methods for manipulating the cases object:
```js
.hasCase(caseKey)
.extendCases(obj)
```

### Example usage
```js
// set up delegator function
var delegator = _.delegator({
	"A": function () {
		var args = [].slice.call(arguments);
		return "A:" + args.join(",");
	},
	"B": function () {
		var args = [].slice.call(arguments);
		return "B:" + args.join(",");
	}
}, "A");

// call delegator function with no arguments
delegator();
=> "A:"

// call delegator function with arguments
delegator("B", 0, 1, 2, 3);
=> "B:0,1,2,3"

// call delegator function with a case key that is not in the cases object
delegator("C", 0, 1, 2, 3);
=> "A:0,1,2,3"

// check to see if a case exists
delegator.hasCase("C");
=> false

// add a new case
delegator.extendCases({ "C": function () { return "CASE C"; } });

// check the defaultCaseKey
delegator.defaultCaseKey();
=> "A"

// set the defaultCaseKey
delegator.defaultCaseKey("C");

// call delegator function with no arguments
delegator();
=> "CASE C"
```