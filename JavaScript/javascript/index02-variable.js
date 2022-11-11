// 'use strict';

// 1. 변수(Variable) - var, let, const 3개가 있음.
// var 은 ECMAScript5에서 사용(이제는 사용X)

// var 재선언 O, 값변환 O 
// let 재선언 X, 값변환 X
// const 재선언X, 값변환X

// var
var test = 1;
console.log(test)
var test = 2;
console.log(test)

// let
// Mutable Data - 값이 계속 변경될 수 있는 변수
let name1 = 'yb';
console.log(name1);
name1 = 'mingo';
console.log(name1);

// const(Constant)
// Immutable Data - 값이 변경할 수 없는 변수
// security
// thread safety
// reduce human mistakes
const test2 = 3;
console.log(test2);
// test2 = 4; //error

// 결과
// 1
// 2
// yb
// minho
// 3


// 2. block scope {}을 활용해서 사용
// 블럭 안의 내용을 외부에서 사용 불가.
{
  let test3 = 10;
  console.log(test3);
}
// console.log(test3); // error

// 결과
// 10


// 3. 변수 타입(Variable types)
// primitive, single item: number, string, boolean, null, undefined, symbol 
// object, box container
// function, first-class function

// 숫자열(Number)
const num1 = 10; // integer
const num2 = 10.1; // decimal number
// ES6에 추가된 문법
// `` 백틱(backtick)을 사용하는 방법이 있는데, 템플릿 리터럴(template Literals)이라고 불린다.
console.log(`value: ${num1}, type: ${typeof num1}`);
console.log(`value: ${num2}, type: ${typeof num2}`);

// 결과
// value: 10, type: number
// value: 10.1, type: number

// 무한대의 숫자값 및 숫자가 아니다(NaN = Not a Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 결과
// Infinity
// -Infinity
// NaN

// 사용할 수 있느 숫자크기
// over(-2**53) ~ 2**53
const bigInt1 = 123412341234123412341234123413412341341234;
const bigInt2 = 123412341234123412341234123413412341341234n;
console.log(`value: ${bigInt1}, type: ${typeof bigInt1}`);
console.log(`value: ${bigInt2}, type: ${typeof bigInt2}`);

// 결과
// value: 1.234123412341234e+41, type: number
// value: 123412341234123412341234123413412341341234, type: bigint

// 문자열(String)
const char = 'A';
const apple = "apple";
// const fruite = "banana, " + apple; // success 아래 선언과 같음.
const fruite = `banana, ${apple}`;
console.log(`value: ${char}, type: ${typeof char}`);
console.log(`value: ${fruite}, type: ${typeof fruite}`);

// 결과
// value: A, type: string
// value: banana, apple, type: string

// 참,거짓(boolean)
// flase: 0, null, undefined, NaN, ''
// true: any other value
const bool1 = true;
const bool2 = 3 < 1;
console.log(`value: ${bool1}, type: ${typeof bool1}`);
console.log(`value: ${bool2}, type: ${typeof bool2}`);

// 결과
// value: true, type: boolean
// value: false, type: boolean

// null
// - 빈 값을 지정한 상태
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// 결과
// value: null, type: object

// undefined
// - 아무값도 지정되어 있지 않은 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// 결과
// value: undefined, type: undefined

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요할 때 사용.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(symbol1 === symbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 결과
// false
// true
// value: id, type: symbol

// Object, real-life object, data structure
const user = { name: 'yb', age: 31 }
console.log(`value: ${user.name}, type: ${typeof user.name}`);
console.log(`value: ${user.age}, type: ${typeof user.age}`);

// 결과
// value: yb, type: string
// value: 31, type: number

// 4. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
text = 5 + '7';
console.log(`value: ${text}, type: ${typeof text}`);

// 결과
// h
// value: hello, type: string
// value: 1, type: number
// 75, type: string
// 3.5, type: number
// 57, type: string
