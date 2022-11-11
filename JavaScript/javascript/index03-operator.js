// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`'string literals: 1 + 2 = ${1 + 2}`);

// 결과
// my cat
// 12
// string literals: 1 + 2 = 3

// 2. Numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 결과
// 2
// 0
// 1
// 1
// 0
// 1

// 3. Increment and decrement operators
let counter = 2;
let couterIncrement = ++counter; // 변수에 값을 넣기 전에 +1을 한다.
console.log(`counter: ${counter} couterIncrement: ${couterIncrement}`);
couterIncrement = counter++; // 변수에 값을 넣은 후에 +1을 한다.
console.log(`counter: ${counter} couterIncrement: ${couterIncrement}`);

// 결과
// counter: 3 couterIncrement: 3
// counter: 4 couterIncrement: 3

// 4. Assignment operators
let a = 4;
let b = 8;
a += b; // a = a + b;
a -= b; // a = a - b;
a *= b; // a = a * b;
a /= b; // a = a / b;

// 5. Comparison operators
console.log(4 < 2); // less than
console.log(4 <= 2); // less than or equal
console.log(4 > 2); // greater than
console.log(4 >= 2); // greater than or equal

// 결과
// false
// false
// true
// true

// 6. Logical operators: || (or), && (and), ! (not)
// or true가 하나라도 나오면 true
// and 모두 다 true일 경우만 true
// ! ture이면 false, false이면 true로 바꿔주는 것.
const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
console.log(`or: ${value1  && value2 && check()}`);
console.log(`or: ${!(value1 || value2 || check())}`);

function check() {
  for(let i = 0; i < 10; i++) {
    console.log('✏️');
  }
  return true;
}

// 결과
// ✏️ // 10개 출력
// or: true
// or: false
// ✏️ // 10개 출력
// or: false\

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 값만 같으면 true
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
// 값과 타입이 같으면 true
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// 결과
// true
// false
// false
// true

// object equality by reference
const obj1 = { name: 'minho' };
const obj2 = { name: 'manho' };
const obj3 = obj1;
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 === obj3);

// 결과
// false
// false
// true
