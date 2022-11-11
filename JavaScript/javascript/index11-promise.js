// Promise is a JavaScripot object for asynchronous operation.
// State: pending -> fulfilled or rejected // 기능 상태
// Producer VS Consumer // 데이터를 만들어 내는 사람 VS 데이터가 소비하는 사람

// 1. Producer

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // 무거운 일을 할 때 비동기적으로 사용하는 것이 좋다.
  // 무거운 일이란 네트워크에서 데이터를 받아오거나 파일에서 큰 데이터를 받아오는 것들을 말한다.
  // promise를 만드는 순간 executor함수가 바로 실행된다는 것을 알 수 있다. 네트워크 통신이 된다는 의미.
  // promise를 만드는 순간 executor를 생각하고 생성해야 한다.
  console.log('doing something..');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num-1), 1000);
    })
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('chicken'), 1000);
  });
  
const getEgg = hen => 
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => egg`), 1000);
    setTimeout(() => reject(`error: ${hen} => egg`), 1000);
  });

const cook = egg => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried`), 1000);
  });

getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal))
  .catch(error => console.log(error));

// 한개의 값만 가져올 때 함수만을 불러와서 사용할 수 있다.
getHen()
  .then(getEgg)
  .catch(error => 'fig')
  .then(cook)
  .then(console.log)
  .catch(console.log);