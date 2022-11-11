// HTTP(Hypertext Transfer Protocal)

/*
               request
        --------------------> 
 client                       server
        <--------------------
               response

*/

// XHR(XMLHttpRequest) Object
// fetch() API
// 

// JSON(JavaScript Object Notation)


// 1. Object to JSON
// stringify(obj) - 문자열로 만든다.
let json = JSON.stringify(true);
console.log(json); // true
json = JSON.stringify([ 'apple', 'orange' ])
console.log(json); // ["apple","orange"]
json = JSON.stringify({ name: 'yb' })
console.log(json); // {"name":"yb"}

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  }
}

json = JSON.stringify(rabbit);
console.log(json); 
// {"name":"tori","color":"white","size":null,"birthDate":"2022-08-19T02:55:21.314Z"}
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); // {"name":"tori","color":"white","size":null}
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // result
  // key: , value: [object Object]
  // key: name, value: tori
  // key: color, value: white
  // key: size, value: null
  // key: birthDate, value: 2022-08-19T02:56:29.555Z
  // key: jump, value: () => {
  //   console.log(`${name} can jump!}`);
  // }
  // return value;
  return key === 'name' ? 'yb' : value;
});
console.log(json);
// {"name":"yb","color":"white","size":null,"birthDate":"2022-08-19T02:57:21.497Z"}


console.clear();
// 2. JSON to Object 
// parse(json) - 객체로 만든다.
json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj);
// {name: 'tori', color: 'white', size: null, birthDate: '2022-08-19T02:59:40.144Z'} 
rabbit.jump(); // can jump!
// JSON.stringify는 객체만을 가져오고 메서드는 가져오지 않는다.
// stringify가 된 문서를 parse해서 가져오면 메서드는 없고 객체만 있다.
// obj는 객체만을 가져온 것이기 때문에 함수가 없어서 에러가 난 것이다.
// obj.jumbp(); // error

console.log(rabbit.birthDate.getDate()); // 19
console.log(obj.birthDate); // 2022-08-19T03:06:12.302Z

obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // result
  // key: name, value: tori
  // key: color, value: white
  // key: size, value: null
  // key: birthDate, value: 2022-08-19T03:06:45.505Z
  // key: , value: [object Object]

  return key === 'birthDate' ? new Date(value) : value;
});

console.log(rabbit.birthDate.getDate()); // 19
console.log(obj.birthDate.getDate()); // 19