const assertEqual = function(actual, expected) {
	if (actual !== expected){
		console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
	} else {
		console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
	}
};

const head = function(arr){
	return arr[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);

assertEqual(head([6,6,7]), 5);
