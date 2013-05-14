# mixins for lodash and underscore

## _.collate(array, propertyName)

collate addresses the problem of grouping ordered arrays of data 
when the order of the original array is important.

The existing lodash/underscore mixins handing 
grouping of data destroy the order and/or have
strange effects when the data is numeric or is text that
coerces to numbers (groupBy, for example).

collate will subdivide an array based on changes in the value of a particular property.
The propertyName argument may be a number, for use with arrays of arrays,
or a string, for use with arrays of objects.
proertyName can also be a function, in which case, subdivisions are created based on 
changes in the return value of the given function.

collate accepts an array of propertyNames (which may contain mixed numbers, strings, or functions) 
for easy multi-level collation in a single call.

### Array of objects
	
	var cities = [
		{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 },
		{ city: "New York City", country: "USA", population: 8244910, census: 2011 },
		{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 },
		{ city: "Chicago", country: "USA", population: 2707120, census: 2012 }
	]
	
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