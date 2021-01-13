// 1.
// Iterable object
let arr = ['foo', 'bar']

// Iterator factory
console.log(arr[Symbol.iterator]); // f values() { [native code] }

// Iterator
let iter = arr[Symbol.iterator]();
console.log(iter); // ArrayIterator {}

// Performing iteration
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: true, value: undefined }


/* =========================================================== */

// // 2.
// let arr = ['foo'];
// let iter = arr[Symbol.iterator]();
// console.log(iter.next()); // { done: false, value: 'foo' }
// console.log(iter.next()); // { done: true, value: undefined }
// console.log(iter.next()); // { done: true, value: undefined }
// console.log(iter.next()); // { done: true, value: undefined }


/* =========================================================== */

// // 3.

// let arr = ['foo', 'baz'];
// let iter = arr[Symbol.iterator]();
// console.log(iter.next()); // { done: false, value: 'foo' }
// // Insert value in the middle of array
// arr.splice(1, 0, 'bar');
// console.log(iter.next()); // { done: false, value: 'bar' }
// console.log(iter.next()); // { done: false, value: 'baz' }
// console.log(iter.next()); // { done: true, value: undefined }


/* =========================================================== */

// // 4. Map

// let map = new Map().set('a', 1).set('b', 2);
 
// let iterable = map[Symbol.iterator]();
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());


/* =========================================================== */

// // 5. Set
// let set = new Set().add('a').add('b');
 
// var iterable = set[Symbol.iterator]();
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());


/* =========================================================== */

// // 6. Arguments

// function printArgs()
// {
//     var iterable = arguments[Symbol.iterator]();
//     console.log(iterable.next());
//     console.log(iterable.next());
//     console.log(iterable.next());
// }
// // Sử dụng
// printArgs('a');

