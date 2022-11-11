// 객체(Object)
// instance of a  class
// created many times
// data in


// 1. Literals and properties
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const user = { name: 'yb', age: 31 }
console.log(`${user.name}, ${user.age}`); // yb, 31
// 추가 (이런 식으로 추가는 자제해야 한다. 코드관리를 위해)
user.address = "Soul";
console.log(`${user.name}, ${user.age}, ${user.address}`); // yb, 31, Soul
// 삭제 (이런 식으로 추가는 자제해야 한다. 코드관리를 위해))
delete user.address;
console.log(`${user}, ${user.age}, ${user.address}`); // yb, 31, undefined


// 2. Computed properties
// key should be alway string
console.log(user['name']); // yb
user['address'] = 'Hongcheon';
console.log(user['address']); // Hongcheon

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(user, 'name'); // yb
printValue(user, 'age'); // 31


// 3. Property value shorthand
const person1 = { name: 'bob', age: 6 };
const person2 = makePerson('honga', 30);
console.log(person2); // {name: 'honga', age: 30}
function makePerson(name, age) {
  return {
    // name: name,
    // age: age
    // key, value 의 이름이 동일하면 아래와 같이 사용 가능.
    name,
    age
  }
}


// 4. Constructor function
const person3 = new Person('moga', 22);
console.log(person3); //Person {name: 'moga', age: 22}
// 계산X 순수 Object생성하는 것은 대문자로 시작.
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}


// 5. in operator: peoperty existence check (key in obj)
console.log('name' in user); // true
console.log('age' in user); // true
console.log('random' in user); // false
console.log(user.random); // undefined


// 6. for..in vs for..of
// for (key in obj) 객체에서 사용.
console.clear(); // 이전의 콘솔들을 지워주는 메서드.
for(const key in user) {
  console.log(key);
}

// result
// name
// age
// address

// for(value of iterable) 배열에서 사용
const array = [1, 2, 3, 4];
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// 위와 같은 기능. for(value of arr)
for(const value of array) {
  console.log(value);
}

// result
// 1
// 2
// 3
// 4


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user2 = user;
user2.name = 'change';
console.log(user.name); // change
console.log(user === user2); // true

// old way
const user3 = {};
for(key in user) {
  user3[key] = user[key];
}
user3.name = "hoho"
console.log(user.name); // change
console.log(user3.name); // hoho

// Object.assign(); 찾아보기.
// const user4 = {}
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
user4.name = "fore"
console.log(user.name); // change
console.log(user4.name); // fore

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big