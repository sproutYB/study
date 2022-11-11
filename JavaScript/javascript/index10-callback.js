
// callback함수는 지금 당장 실행하지 않고 나중에 **‘다시 불러줘’** 라고 해서 callback함수라고 합니다.
// ex) setTimeout같은 함수!

// 콜백에는 2종류가 있다.
//  - Synchronous callback
//  - Asynchronous callback

// Synchronous callback(즉각적으로 실행해주는 동기적인 방법)
function printImmediately(print) {
  print();
}

console.log('1');
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3');

printImmediately(() => console.log('hello'));
console.log('4');

// Asynchronous callback(언제 실행해 줄지 예측할 수 없는 방법)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);


// callback함수를 사용하면 코드 가독성이 많이 떨어져 유지 및 보수가 어려워진다.
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
         onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if(user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
          alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log( error);
  }
)