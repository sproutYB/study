// 8. Conditional operators: if
const name1 = "yb";
if( name1 === 'yb') {
  console.log("yb");
} else if(name1 === 'coder') {
  console.log("coder");
} else {
  console.log("else");
}

// 결과
// yb

// 9 Ternary operator: ?
// condition ? value1(true) : value2(false);
console.log(name1 === 'yb' ? 'yes' : 'no');

// 결과
// yes

// 10. Switch statement
const browser = 'IE';
switch(browser) {
  case 'IE':
    console.log('IE');
    break;
  case 'Chrome':
    console.log('Chrome');
    break;
  case 'Firefox':
    console.log('firefox');
    break;
 default:
    console.log('same all!');
}

// 결과
// IE

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0) {
  console.log("while: " + i);
  i--;
}

// 결과
// while: 3
// while: 2
// while: 1

do {
  console.log("do-while: " + i);
  i--;
} while (i > 0);

// 결과
// do-while: 0

// for loop, for(begin; condition; step)
for(let i = 0; i < 5; i++) {
  console.log('🐇');
}

// 결과
// 🐇 // 5개 출력

// nested loops
for(let i = 0; i < 5; i++) {
  for(let j = 0; j < 5; j++) {
    console.log('🎶');
  }
}

// 결과
// 🎶 // 25개 출력

// break(조건이 맞을 경우 해당 조건문에서 벗어난다.)
for(let i = 0; i < 5; i++) {
  for(let j = 0; j < 5; j++) {
    if(j === 4) break;
    console.log('🎶');
  }
}

// 결과
// 🎶 // 20개 출력

// continue(조건이 맞을 때 해당 조건문의 다음 조건을 실행)
for(let i = 0; i < 5; i++) {
  for(let j = 0; j < 5; j++) {
    if(j % 2 === 0) continue;
    console.log('🎶');
  }
}

// 결과
// 🎶 // 10개 출력
