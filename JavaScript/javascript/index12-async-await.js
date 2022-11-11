// syntactic sugar
// clear style of using promise

// 1. async

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // return 'ellie'; // pending 상태
//     resolve('ellie');
//   });
// }
// async를 함수 앞에 쓰면 코드 블럭이 자동으로 promise로 바뀐다.
async function fetchUser() {
  return 'ellie';
}

const user = fetchUser();

console.log(user);

user.then(console.log);

//2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw 'error';
  // throw new Error('에러가 떳어요!!');
  return 'apple';
}

// function getBanana() {
//   return delay(300)
//     .then(() => '팽귄');
// }
// async 방식으로 사용
async function getBanana() {
  await delay(1000);
  return 'Banana';
}

// function pickFruits() {
//   return getApple()
//     .then(apple => {
//       return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }
// async 방식으로 사용
// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();

//   return `${apple} + ${banana}`;
// }
// async function pickFruits() {
//   try {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
//   } catch(e) {
//     return e;
//   }
// }

// 이렇게 더럽게 사용 하지 않고 3번처럼 사용한다.
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}


pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([ getApple(), getBanana() ])
    .then(fruite => fruite.join(' + '))
}

pickAllFruits().then(console.log);

// 가장 먼저 값을 전달하는 것만 수행.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);