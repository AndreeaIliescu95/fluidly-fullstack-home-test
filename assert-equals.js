// function assertEquals(expect, actual) {
// 	if (typeof expect == typeof actual) {
// 		if (expect.length != actual.length) {
// 			return `Expected array length ${expect.length} but found ${actual.length}`;
// 		}

// 		return 'no error';
// 	} else if (expect.length != actual.length)
// 		return `expected type of ${typeof expect} but found type of ${typeof actual} `;
// }

function assertEquals(expect, actual) {
	if (typeof expect != typeof actual) {
		return `Expected type of ${typeof expect} but found type of ${typeof actual} `;
	} else if (expect !== actual) {
		if (expect.constructor == Array) {
			if (expect.length == actual.length) {
				for (let i = 0; i <= expect.length; i++)
					if (expect[i] != actual[i]) {
						return `Expected  ${expect[i]} but found ${actual[i]} `;
					}
				return 'no error';
			} else return `Expected array length ${expect.length} but found ${actual.length} `;
		} else return `Expected  ${expect} but found ${actual} `;
	} else {
		return 'no error';
	}
}
module.exports = assertEquals;
console.log(assertEquals('abc', 'abc'));
console.log(assertEquals('abcef', 'abc'));
console.log(assertEquals(1, 1));
console.log(assertEquals(1, 2));
console.log(assertEquals(1, '1'));
console.log(assertEquals(['a', 'b', 'c'], ['a', 'b', 'c']));
console.log(assertEquals(['a', 'b'], ['a', 'b', 'c']));
console.log(assertEquals(['a', 'b'], ['a', 'd']));
