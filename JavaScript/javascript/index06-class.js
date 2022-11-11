// 클래스(Class)
// template
// declare once
// no data in

// class name {
//   field;
//   method();
// }

// JavaScript classes
// introduced in ES6
// syntactical sugar over prototype-based-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this. age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const user = new Person('yb', 20);
console.log(user.name);
console.log(user.age);
user.speak();

// result
// yb
// 20
// yb: hello!

// 2. Getter & Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    
    return this._age;
  }
  set age(value) {
    // if(value < 0) throw new Error("age can not be negative");
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('yh', 'Job', -1);
console.log(user1.age);

// result
//  0

// 3. Fields (*public, private)
// Too soon!
class Experiment {
  // this를 사용안해도 똑같이 일을 수행한다.
  publicField = 2;
  // #을 사용하면 값을 읽을 수도 출력할수도 없다.
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// result
// 2
// undefined

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Hell Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
// 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸수 있는 거라면 static과 static메서드를 사용하는것이 메모리르 줄여 줄 수 있다.
const article = new Article();
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article.publisher);
console.log(article1.publisher);
console.log(article2.publisher);
console.log(Article.publisher);
Article.printPublisher();

// result
// undefined
// undefined
// undefined
// Hell Coding
// Hell Coding

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {};
class Triangle extends Shape {
  // 오버라이딩()
  draw() {
    super.draw(); // drawing red color of (부모draw의 것을 가져온다.)
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
};

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// result
// drawing blue color of
// 400
// drawing red color of
// 🔺
// 200


// 6. Class checking: instanceOf
// rectangle이 Rectangle의 인스턴스인지 확인하는 것.
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle: color: red
// console.log(triangle.toString()); 
// [object Object] (원래 기본 toString() 결과)