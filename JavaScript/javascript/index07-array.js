// 배열(Array)

// 1. Declaration 
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const array1 = [0, 1, 2, 3, 4];
const array2 = [5, 6, 7, 8, 9];

console.log(array1[0]); // 0
console.log(array1[4]); // 4
// 배열의 길이를 구하는 메서드 .length
console.log(array1.length); // 5
console.log(array2[array2.length - 1]); // 9

// 3. Looping over an array
// a. for
for(let i = 0; i < array1.length; i++) {
  console.log(array1[i]); // 0 1 2 3 4
}
// b. for of
for(let value of array1) {
  console.log(value) // 0 1 2 3 4
}
// c. forEach
array1.forEach((value) => {
  console.log(value); // 0 1 2 3 4
})
// forEach문으로 index도 가져온다.
array1.forEach((value, index) => {
  console.log(value, index); // 0 0 1 1 2 2 3 3 4 4
})


// console.clear();
console.log("-------------------");

// 4. Addtion, deletion, copy
// push: add an item to the end
array1.push(10);
console.log(array1); // [0, 1, 2, 3, 4, 10]

// pop: remove an item from the end
array1.pop();
array1.pop();
console.log(array1); // [0, 1, 2, 3]

// unshift: add an item to the benigging
array1.unshift('100');
console.log(array1);  // [100, 0, 1, 2, 3]

// shift: remove an item from the beniggubg
array1.shift();
array1.shift();
console.log(array1);  // [1, 2, 3]

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
array1.push(1000, 100, 50);
console.log(array1); // [1, 2, 3, 1000, 100, 50]

// array1.splice(1); // inedx 1번 뒤로 다 잘라내기
// array1.splice(1, 0, 400, 600); // index 1번 자리에서 400, 600 추가
// array1.splice(1, 4, 700); // index 1~3번 자리까지 삭제하고 700 추가
array1.splice(1, 1); // index 1번을 삭제
console.log(array1); // [1, 3, 1000, 100, 50]
array1.splice(1, 1, 200, 300);
console.log(array1); // [1, 200, 300, 1000, 100, 50]

// combine two arrays
const arr3 = [1, 2];
const newArr3 = array1.concat(arr3);
console.log(newArr3); // [1, 200, 300, 1000, 100, 50, 1, 2]

// 5. Searching
// find the index
console.clear();
console.log(array1);
console.log(array1.indexOf(1)); // 0
console.log(array1.indexOf(1000)); // 3
console.log(array1.indexOf(200)); // 1

// includes
console.log(array1.includes(300)); // true
console.log(array1.includes(200)); // true
console.log(array1.includes(500)); // false

// lastIndexOf
array1.push(1);
console.log(array1); // [1, 200, 300, 1000, 100, 50, 1]
console.log(array1.indexOf(1)); // 0
console.log(array1.lastIndexOf(1)); // 6
