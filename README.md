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

### Array of objects
	
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
	
### Array of arrays

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