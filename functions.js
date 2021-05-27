// List of functions to personally use, a toolbox

// Returns whatever value is passed as the argument. 
// This function doesn't seem very useful, 
// but remember it--if a function needs to provide an iterator when the user does not pass one in, 
// this will be handy.
const identity = function (value) {
  return value
};

// return the first n things in an array
const first = function (array, n) {
  if(n > array.length) {
  return array 
  }
  if(n === undefined) {
    return array[0]
  }
  if(n === 0) {
    return [];
  }
  else(array.slice()); {
    return array.slice(0,n)
  }
};

// return the last n things in an array
const last = function (array, n) {
  if(n === undefined) {
    return array[2]
  }
  if(n === 0) {
    return [];
  }
  if(n > array.length) {
    return array 
  }
    else(array.slice()); {
      return array.slice(n-1)
    }
  };


// This function loops through an array and applies a function,
// Given a collection (array OR object) and a function (can use anonymous functions for quick & easy use).
const each = function (collection, callback) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

  // if the collection is an array,
  if (collection instanceof Array) {
    // loop through the array,
    for (let i = 0; i < collection.length; i++) {
      // apply the callback function on every time in the array.
      callback(collection[i], i, collection);
    }
    // Otherwise, if it's something like an object,
  } else {
    // for every property in this collection (object),
    for (let prop in collection) {
      // apply the callback function to the property.
      callback(collection[prop], prop, collection);
    }
  }
};

// This function returns the index of an array item,
// Given the array and the target you're searching for.
const indexOf = function (array, target) {
  // loop through the array,
  for (let i = 0; i < array.length; i++) {
    // If the array of the current index matches the target exactly,
    if (array[i] === target) {
      // return the current index.
      return i;
    }
  }
  // Otherwise, return -1
  return -1;
};

// This function returns a mutated array,
// Given an array and a callback function (used to mutate each item).
const map = function (collection, callback) {
  let result = [];
  each(collection, function (item) {
    result.push(callback(item));
  });
  return result;
};

// return only the unique items in the array, no repeats!
const uniq = function (array) {
  let result = [];

  each(array, function(element) {

    if (indexOf(result, element) === -1) {
      if (item === target && result === -1) {
        result.push(element);
      }
    };
  });

  return result;
}

const reject = function (collection, callbackTest) {
  let result = [];
  each(collection, function (value) {
    if (!callbackTest(value)) {
      result.push(value);
    }
  });
  return result;
};

const reduce = function (collection, iterator, accumulator) {
  let initializing = arguments.length === 2;

  each(collection, function (value) {
    if(initializing) {
      accumulator = value;
      initializing = false;
    } else {
      accumulator = iterator(accumulator, value);
    }
  })
  return accumulator;
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};

// lalalala