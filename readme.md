# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brandon236/lotide`

**Require it:**

`const _ = require('@brandon236/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the head of a given array.
* `tail(array)`: Returns the tail of a given array (everything but the head). 
* `middle(array)`: Returns the value that's in the middle of the array. If the array has an even number of elements, it will return the two values in the center. 
* `assertEqual(actual, expected)`: Determines if two values are equal.
* `eqArrays(array1, array2)`: Determines if two arrays are equal.
* `assertArraysEqual(array1, array2)`: Determines if two arrays are equal with a special message printed to the console. 
* `eqObject(object1, object2)`: Determines if two objects are equal.
* `assertObjectsEqual(actual, expected)`: Determines if two objects are equal with a special message printed to the console.
* `countOnly(allItems, itemsToCount)`: Takes in a list and counts only the specified values in the list.
* `countLetters(string)`: Returns an object that contains the count for each letter in the string.
* `findKey(object, callback)`: Finds a specified key based on a callback function.
* `findKeyByValue(object, value)`: Finds a key based on a specified value in a given object.
* `flatten(array)`: Takes an array and turns it into a single dimentional array.
* `letterPositions(sentence)`: Returns an object that contains arrays with the letter positions of the given string.
* `map(array, callback)`: Applies a callback function to each array item.
* `takeUntil(array, callback)`: Prints out the elements of an array until a given callback function returns true.
* `without(source, itemsToRemove)`: Removes all array elements that are found in another given array.