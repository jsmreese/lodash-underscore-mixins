(function(root) {
	var _ = root._;
	
	_.mixin({
		// _.delegator(cases, defaultCaseKey [, thisArg])
		// Returns a function object that acts as a delegator for a method look-up object.
		// Use as a configurable replacement for switch statements.
		//
		// cases: Required. Object containing method functions.
		// defaultCaseKey: Required. Name of key containing default method function.
		//		Default case is used when no case key is provided,
		//		or when provided case key is not found in cases object.
		// thisArg: Optional. "this" argument to be used as context for case method function evaluation.
		//
		// Returned delegator function uses its first argument as the case key.
		// All other arguments passed to the delegator function
		// are passed directly through to the delegate method.
		//
		// inspired by and substantially copied from https://github.com/rwldrn/idiomatic.js/
		delegator: function(cases, defaultCaseKey, thisArg) {
			var args, delegator;

			// create delegator function
			delegator = function() {
				var args, caseKey, delegate;
				
				// transform arguments list into an array
				args = [].slice.call(arguments);
				
				// shift the case key from the arguments
				caseKey = args.shift();
				
				// assign default delegate
				delegate = cases[defaultCaseKey];
				
				// derive delegate method based on caseKey
				if (caseKey && cases[caseKey]) {
					delegate = cases[caseKey];
				}
				
				// thisArg is undefined if not supplied
				return delegate.apply(thisArg, args);
			};
			
			// add delegator methods
			// getter/setter methods to access delegator initialization parameters
			delegator.cases = function(obj) {
				if (!obj) {	return cases; } 
				cases = obj;
			};
			delegator.defaultCaseKey = function(key) {
				if (!key) {	return defaultCaseKey; } 
				defaultCaseKey = key;			
			};
			delegator.thisArg = function(obj) {
				if (!obj) {	return thisArg; } 
				thisArg = obj;			
			};
			
			// utility methods
			delegator.extendCases = function(obj) {
				_.extend(cases, obj);
			};
			delegator.hasCase = function(key) {
				return _.isFunction(cases[key]);
			};
			
			return delegator;
		},
		
		// collate
		// will organize an array of items into an array of arrays of items
		// grouped by a single propertyName
		// will respect the original order of the array
		// will create new subarray groupings at propertyName value boundaries
		// a future version could accept an array of propertyNames for 
		// multi-level grouping on multiple propertyNames in one action
		// don't forget to test on arry indices, so propertyName like 1 or \[1, 4, 5\]
		collate: function (array, propertyName) {
			var keys = [].concat(propertyName),
				key = keys.shift(),
				result = [],
				group,
				lastValue;
			
			// return the original array if no propertyName is supplied
			if (!key) { return array; }
			
			// return an empty array if no array is supplied
			if (!(array && array.length)) { return result; }
			
			_.each(array, function (item, index) {
				var isMatch = (index && item[key] === lastValue);
				
				// if item\[key\] does not match the last value, reset the group array
				if (!isMatch) {
					// if this is the first item, save the current group first
					// call collate on current group if there are additional keys
					if (index) { result.push(keys.length ? _.collate(group, keys) : group); }
					group = [];
				}

				group.push(item);
				lastValue = item[key];
			});
			
			// save the final group
			// call collate on final group if there are additional keys
			result.push(keys.length ? _.collate(group, keys) : group);
			
			return result;
		}
	});
})(this);
