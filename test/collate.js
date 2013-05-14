$(document).ready(function() {

	// setup arrays to collate
	
	// arrays of objects (top 25 cities of Canada, Mexico, and USA by population)
	var cities = [
		{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 },
		{ city: "New York City", country: "USA", population: 8244910, census: 2011 },
		{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 },
		{ city: "Chicago", country: "USA", population: 2707120, census: 2012 },
		{ city: "Toronto", country: "Canada", population: 2615060, census: 2012 },
		{ city: "Houston", country: "USA", population: 2145146, census: 2011 },
		{ city: "Montréal", country: "Canada", population: 1688481, census: 2011 },
		{ city: "Ecatepec de Morelos", country: "Mexico", population: 1655015, census: 2010 },
		{ city: "Guadalajara", country: "Mexico", population: 1564514, census: 2010 },
		{ city: "Puebla", country: "Mexico", population: 1539189, census: 2010 },
		{ city: "Philadelphia", country: "USA", population: 1536471, census: 2011 },
		{ city: "Phoenix", country: "USA", population: 1469471, census: 2011 },
		{ city: "León", country: "Mexico", population: 1436733, census: 2010 },
		{ city: "San Antonio", country: "USA", population: 1359758, census: 2011 },
		{ city: "San Diego", country: "USA", population: 1326179, census: 2011 },
		{ city: "Juárez", country: "Mexico", population: 1321004, census: 2010 },
		{ city: "Tijuana", country: "Mexico", population: 1300983, census: 2010 },
		{ city: "Dallas", country: "USA", population: 1223229, census: 2011 },
		{ city: "Zapopan", country: "Mexico", population: 1155790, census: 2010 },
		{ city: "Monterrey", country: "Mexico", population: 1130960, census: 2010 },
		{ city: "Nezahualcóyotl", country: "Mexico", population: 1109363, census: 2010 },
		{ city: "Calgary", country: "Canada", population: 1096833, census: 2011 },
		{ city: "San Jose", country: "USA", population: 967487, census: 2011 },
		{ city: "Ottawa", country: "Canada", population: 883391, census: 2011 },
		{ city: "Jacksonville", country: "USA", population: 827908, census: 2011 }
	];

	var citiesCollatedOnCountry = [
		[
			{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 }
		],
		[
			{ city: "New York City", country: "USA", population: 8244910, census: 2011 },
			{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 },
			{ city: "Chicago", country: "USA", population: 2707120, census: 2012 }
		],
		[
			{ city: "Toronto", country: "Canada", population: 2615060, census: 2012 }
		],
		[
			{ city: "Houston", country: "USA", population: 2145146, census: 2011 }
		],
		[
			{ city: "Montréal", country: "Canada", population: 1688481, census: 2011 }
		],
		[
			{ city: "Ecatepec de Morelos", country: "Mexico", population: 1655015, census: 2010 },
			{ city: "Guadalajara", country: "Mexico", population: 1564514, census: 2010},
			{ city: "Puebla", country: "Mexico", population: 1539189, census: 2010 }
		],
		[
			{ city: "Philadelphia", country: "USA", population: 1536471, census: 2011 },
			{ city: "Phoenix", country: "USA", population: 1469471, census: 2011 }
		],
		[
			{ city: "León", country: "Mexico", population: 1436733, census: 2010 }
		],
		[
			{ city: "San Antonio", country: "USA", population: 1359758, census: 2011 },
			{ city: "San Diego", country: "USA", population: 1326179, census: 2011 }
		],
		[
			{ city: "Juárez", country: "Mexico", population: 1321004, census: 2010 },
			{ city: "Tijuana", country: "Mexico", population: 1300983, census: 2010 }
		],
		[
			{ city: "Dallas", country: "USA", population: 1223229, census: 2011 }
		],
		[
			{ city: "Zapopan", country: "Mexico", population: 1155790, census: 2010 },
			{ city: "Monterrey", country: "Mexico", population: 1130960, census: 2010 },
			{ city: "Nezahualcóyotl", country: "Mexico", population: 1109363, census: 2010 }
		],
		[
			{ city: "Calgary", country: "Canada", population: 1096833, census: 2011 }
		],
		[
			{ city: "San Jose", country: "USA", population: 967487, census: 2011 }
		],
		[
			{ city: "Ottawa", country: "Canada", population: 883391, census: 2011 }
		],
		[
			{ city: "Jacksonville", country: "USA", population: 827908, census: 2011 }
		]
	];

	var citiesCollatedOnCensus = [
		[
			{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 }
		],
		[
			{ city: "New York City", country: "USA", population: 8244910, census: 2011 },
			{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 }
		],
		[
			{ city: "Chicago", country: "USA", population: 2707120, census: 2012 },
			{ city: "Toronto", country: "Canada", population: 2615060, census: 2012 }
		],
		[
			{ city: "Houston", country: "USA", population: 2145146, census: 2011 },
			{ city: "Montréal", country: "Canada", population: 1688481, census: 2011 }
		],
		[
			{ city: "Ecatepec de Morelos", country: "Mexico", population: 1655015, census: 2010 },
			{ city: "Guadalajara", country: "Mexico", population: 1564514, census: 2010},
			{ city: "Puebla", country: "Mexico", population: 1539189, census: 2010 }
		],
		[
			{ city: "Philadelphia", country: "USA", population: 1536471, census: 2011 },
			{ city: "Phoenix", country: "USA", population: 1469471, census: 2011 }
		],
		[
			{ city: "León", country: "Mexico", population: 1436733, census: 2010 }
		],
		[
			{ city: "San Antonio", country: "USA", population: 1359758, census: 2011 },
			{ city: "San Diego", country: "USA", population: 1326179, census: 2011 }
		],
		[
			{ city: "Juárez", country: "Mexico", population: 1321004, census: 2010 },
			{ city: "Tijuana", country: "Mexico", population: 1300983, census: 2010 }
		],
		[
			{ city: "Dallas", country: "USA", population: 1223229, census: 2011 }
		],
		[
			{ city: "Zapopan", country: "Mexico", population: 1155790, census: 2010 },
			{ city: "Monterrey", country: "Mexico", population: 1130960, census: 2010 },
			{ city: "Nezahualcóyotl", country: "Mexico", population: 1109363, census: 2010 }
		],
		[
			{ city: "Calgary", country: "Canada", population: 1096833, census: 2011 },
			{ city: "San Jose", country: "USA", population: 967487, census: 2011 },
			{ city: "Ottawa", country: "Canada", population: 883391, census: 2011 },
			{ city: "Jacksonville", country: "USA", population: 827908, census: 2011 }
		]
	];

	var citiesCollatedOnCensusAndCountry = [
		[[
			{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 }
		]],
		[[
			{ city: "New York City", country: "USA", population: 8244910, census: 2011 },
			{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 }
		]],
		[[
			{ city: "Chicago", country: "USA", population: 2707120, census: 2012 }
		],[
			{ city: "Toronto", country: "Canada", population: 2615060, census: 2012 }
		]],
		[[
			{ city: "Houston", country: "USA", population: 2145146, census: 2011 }
		],[
			{ city: "Montréal", country: "Canada", population: 1688481, census: 2011 }
		]],
		[[
			{ city: "Ecatepec de Morelos", country: "Mexico", population: 1655015, census: 2010 },
			{ city: "Guadalajara", country: "Mexico", population: 1564514, census: 2010},
			{ city: "Puebla", country: "Mexico", population: 1539189, census: 2010 }
		]],
		[[
			{ city: "Philadelphia", country: "USA", population: 1536471, census: 2011 },
			{ city: "Phoenix", country: "USA", population: 1469471, census: 2011 }
		]],
		[[
			{ city: "León", country: "Mexico", population: 1436733, census: 2010 }
		]],
		[[
			{ city: "San Antonio", country: "USA", population: 1359758, census: 2011 },
			{ city: "San Diego", country: "USA", population: 1326179, census: 2011 }
		]],
		[[
			{ city: "Juárez", country: "Mexico", population: 1321004, census: 2010 },
			{ city: "Tijuana", country: "Mexico", population: 1300983, census: 2010 }
		]],
		[[
			{ city: "Dallas", country: "USA", population: 1223229, census: 2011 }
		]],
		[[
			{ city: "Zapopan", country: "Mexico", population: 1155790, census: 2010 },
			{ city: "Monterrey", country: "Mexico", population: 1130960, census: 2010 },
			{ city: "Nezahualcóyotl", country: "Mexico", population: 1109363, census: 2010 }
		]],
		[[
			{ city: "Calgary", country: "Canada", population: 1096833, census: 2011 }
		],[
			{ city: "San Jose", country: "USA", population: 967487, census: 2011 }
		],[
			{ city: "Ottawa", country: "Canada", population: 883391, census: 2011 }
		],[
			{ city: "Jacksonville", country: "USA", population: 827908, census: 2011 }
		]]	
	];

	var citiesCollatedOnPopulationFunction = [
		[
			{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 },
			{ city: "New York City", country: "USA", population: 8244910, census: 2011 }
		],
		[
			{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 }
		],
		[
			{ city: "Chicago", country: "USA", population: 2707120, census: 2012 },
			{ city: "Toronto", country: "Canada", population: 2615060, census: 2012 },
			{ city: "Houston", country: "USA", population: 2145146, census: 2011 }
		],
		[
			{ city: "Montréal", country: "Canada", population: 1688481, census: 2011 },
			{ city: "Ecatepec de Morelos", country: "Mexico", population: 1655015, census: 2010 },
			{ city: "Guadalajara", country: "Mexico", population: 1564514, census: 2010},
			{ city: "Puebla", country: "Mexico", population: 1539189, census: 2010 },
			{ city: "Philadelphia", country: "USA", population: 1536471, census: 2011 },
			{ city: "Phoenix", country: "USA", population: 1469471, census: 2011 },
			{ city: "León", country: "Mexico", population: 1436733, census: 2010 },
			{ city: "San Antonio", country: "USA", population: 1359758, census: 2011 },
			{ city: "San Diego", country: "USA", population: 1326179, census: 2011 },
			{ city: "Juárez", country: "Mexico", population: 1321004, census: 2010 },
			{ city: "Tijuana", country: "Mexico", population: 1300983, census: 2010 },
			{ city: "Dallas", country: "USA", population: 1223229, census: 2011 },
			{ city: "Zapopan", country: "Mexico", population: 1155790, census: 2010 },
			{ city: "Monterrey", country: "Mexico", population: 1130960, census: 2010 },
			{ city: "Nezahualcóyotl", country: "Mexico", population: 1109363, census: 2010 },
			{ city: "Calgary", country: "Canada", population: 1096833, census: 2011 }
		],
		[
			{ city: "San Jose", country: "USA", population: 967487, census: 2011 },
			{ city: "Ottawa", country: "Canada", population: 883391, census: 2011 },
			{ city: "Jacksonville", country: "USA", population: 827908, census: 2011 }
		]
	];

	var citiesCollatedOnPopulationAndCityFunctions = [
		[[
			{ city: "Mexico City", country: "Mexico", population: 8851080, census: 2010 }
		],[
			{ city: "New York City", country: "USA", population: 8244910, census: 2011 }
		]],
		[[
			{ city: "Los Angeles", country: "USA", population: 3819702, census: 2011 }
		]],
		[[
			{ city: "Chicago", country: "USA", population: 2707120, census: 2012 },
			{ city: "Toronto", country: "Canada", population: 2615060, census: 2012 },
			{ city: "Houston", country: "USA", population: 2145146, census: 2011 }
		]],
		[[
			{ city: "Montréal", country: "Canada", population: 1688481, census: 2011 }
		],[
			{ city: "Ecatepec de Morelos", country: "Mexico", population: 1655015, census: 2010 }
		],[
			{ city: "Guadalajara", country: "Mexico", population: 1564514, census: 2010},
			{ city: "Puebla", country: "Mexico", population: 1539189, census: 2010 },
			{ city: "Philadelphia", country: "USA", population: 1536471, census: 2011 },
			{ city: "Phoenix", country: "USA", population: 1469471, census: 2011 },
			{ city: "León", country: "Mexico", population: 1436733, census: 2010 }
		],[
			{ city: "San Antonio", country: "USA", population: 1359758, census: 2011 },
			{ city: "San Diego", country: "USA", population: 1326179, census: 2011 }
		],[
			{ city: "Juárez", country: "Mexico", population: 1321004, census: 2010 },
			{ city: "Tijuana", country: "Mexico", population: 1300983, census: 2010 },
			{ city: "Dallas", country: "USA", population: 1223229, census: 2011 },
			{ city: "Zapopan", country: "Mexico", population: 1155790, census: 2010 },
			{ city: "Monterrey", country: "Mexico", population: 1130960, census: 2010 },
			{ city: "Nezahualcóyotl", country: "Mexico", population: 1109363, census: 2010 },
			{ city: "Calgary", country: "Canada", population: 1096833, census: 2011 }
		]],
		[[
			{ city: "San Jose", country: "USA", population: 967487, census: 2011 }
		],[
			{ city: "Ottawa", country: "Canada", population: 883391, census: 2011 },
			{ city: "Jacksonville", country: "USA", population: 827908, census: 2011 }
		]]
	];
	
	// arrays of arrays
	
	var data = [
		[0, 0, "A", "Apple"],
		[0, 1, "A", "Aardvark"],
		[0, 1, "A", "Amazing"],
		[0, 2, "A", "Audience"],
		[0, 2, "A", "Audacity"],
		[1, 0, "A", "Banana"],
		[1, 0, "B", "Bazaar"],
		[1, 0, "C", "Bundle"],
		[1, 1, "A", "Buttress"],
		[1, 1, "B", "Butcher"],
		[0, 3, "A", "Carnival"],
		[0, 3, "A", "Chronology"],
		[0, 3, "A", "Crest"],
		[0, 4, "A", "Cripple"],
		[0, 4, "A", "Create"],
		[1, 1, "A", "Destroy"],
		[1, 1, "A", "Demolish"],
		[1, 1, "A", "Demonize"],
		[1, 1, "A", "Deranged"],
		[1, 1, "A", "Diabolical"]
	];

	var dataCollatedOnFirstIndex = [
		[
			[0, 0, "A", "Apple"],
			[0, 1, "A", "Aardvark"],
			[0, 1, "A", "Amazing"],
			[0, 2, "A", "Audience"],
			[0, 2, "A", "Audacity"]
		],
		[
			[1, 0, "A", "Banana"],
			[1, 0, "B", "Bazaar"],
			[1, 0, "C", "Bundle"],
			[1, 1, "A", "Buttress"],
			[1, 1, "B", "Butcher"]
		],
		[
			[0, 3, "A", "Carnival"],
			[0, 3, "A", "Chronology"],
			[0, 3, "A", "Crest"],
			[0, 4, "A", "Cripple"],
			[0, 4, "A", "Create"]
		],
		[
			[1, 1, "A", "Destroy"],
			[1, 1, "A", "Demolish"],
			[1, 1, "A", "Demonize"],
			[1, 1, "A", "Deranged"],
			[1, 1, "A", "Diabolical"]
		]
	];

	var dataCollatedOnKitchenSink = [
		[[[
			[0, 0, "A", "Apple"]
		]],[[
			[0, 1, "A", "Aardvark"]
		],[
			[0, 1, "A", "Amazing"]
		]],[[
			[0, 2, "A", "Audience"],
			[0, 2, "A", "Audacity"]
		]]],
		[[[
			[1, 0, "A", "Banana"],
			[1, 0, "B", "Bazaar"]
		],[
			[1, 0, "C", "Bundle"]
		]],[[
			[1, 1, "A", "Buttress"],
			[1, 1, "B", "Butcher"]
		]]],
		[[[
			[0, 3, "A", "Carnival"]
		],[
			[0, 3, "A", "Chronology"]
		],[
			[0, 3, "A", "Crest"]
		]],[[
			[0, 4, "A", "Cripple"],
			[0, 4, "A", "Create"]
		]]],
		[[[
			[1, 1, "A", "Destroy"],
			[1, 1, "A", "Demolish"],
			[1, 1, "A", "Demonize"],
			[1, 1, "A", "Deranged"]
		],[
			[1, 1, "A", "Diabolical"]
		]]]
	];
	
	// tests
	
	module('Collate');

	test("null or undefined arguments", function () {
		equal(_.collate(), undefined);
		equal(_.collate(cities, null), cities);
		deepEqual(_.collate(null, "country"), []);
	});
	
	test("array of objects", function () {
		// single propertyName, text property values
		deepEqual(_.collate(cities, "country"), citiesCollatedOnCountry);
		
		// single propertyName, numeric property values
		deepEqual(_.collate(cities, "census"), citiesCollatedOnCensus);
		
		// array of propertyNames
		deepEqual(_.collate(cities, ["census", "country"]), citiesCollatedOnCensusAndCountry);
		
		// single propertyName function
		deepEqual(_.collate(cities, function (item, index) { return Math.floor(item.population / 1000000); }), citiesCollatedOnPopulationFunction);

		// array of propertyName functions
		deepEqual(_.collate(cities, [
			function (item, index) { return Math.floor(item.population / 1000000); },
			function (item, index) { return item.city.split(" ").length; }
		]), citiesCollatedOnPopulationAndCityFunctions);
	});

	test("array of arrays", function () {
		// single propertyName number
		deepEqual(_.collate(data, 0), dataCollatedOnFirstIndex);
		
		//single propertyName string
		deepEqual(_.collate(data, "0"), dataCollatedOnFirstIndex);
		
		//single propertyName function
		deepEqual(_.collate(data, function (item, index) { return item[0]; }), dataCollatedOnFirstIndex);
		
		//array of propertyName number, string, and function
		deepEqual(_.collate(data, [
			0,
			"1",
			function (item, index) { return item[3].slice(0, 2); }
		]), dataCollatedOnKitchenSink);
	});
});
