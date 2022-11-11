// 함수(Function)
// 함수(function)는 굉장히 중요한 기능이기 떄문에 sub-program이라고 부르기도 한다.
// fundamental building block in th program
// subprogram can be used multiple times
// performs a task or calculates a value

// 1. function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, comand, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

// Function
function prinHello(message) {
  console.log(message);
}
prinHello('Hello');

// 결과
// Hello

// 2. Parameters
// premitive parameters: passed by value
// object prameters: passed by reference

const user = { name: 'yb' };

function changeName(obj) {
  obj.name = 'yh'
}

changeName(user);

console.log(user);

// 결과
// {name: 'yh'}


// 3. Default parameters (added in ES6)
// 빈 파라미터는 대체되어 undefined 로 출력.
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}

showMessage('Hi!');

// 결과
// Hi! by undefined

// 4. Rest parameters (added in ES6)
// ...을 사용하면 배열 형태로 들어가게 됩니다.
// ...args === ['코딩은', '정말', '즐겁다?']
function printAll(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // 
  for(const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('코딩은', '정말', '즐겁다?');

// 결과
// 코딩은
// 정말
// 즐겁다?

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable

function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'world';
  }
  printAnother();
  // console.log(childMessage); // error
}

printMessage();

// 결과
// hello
// global
// hello

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(3, 4); // 7
console.log(`sum: ${sum(3, 4)}`);

// 결과
// 7

// 7. Early return, early exit
// bad
function upgradeUser1(user) {
  if(user.point > 10) {
    // long upgrade logic...

  }
}

// good
// 조건이 맞지 않는 경우 리턴하고 다음에 코드를 작성하는 것이 좋다.
function upgradeUser2(user) {
  if(user.point <= 10) {
    return;
  }
  // long upgrade logic...
}


// First-class function

// 1. Function expression
const printWorld = function(message) {
  console.log(message);
}
printWorld('World');
const printAgain = printWorld;
printAgain('World');

// 결과
// World
// World

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
  // print();
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 결과
// no!
// yes!


// Allow Function
// alway anonymous
const simplePrint = () => console.log('simplePrint!');

simplePrint();

// 결과
// simplePrint

// IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 실행시키는 방법
// function hello() {
//   console.log("IIFE");
// }
// hello();
(function hello() {
  console.log("IIFE");
})();

// 결과
// IIFE
