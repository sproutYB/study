// 유용한 메서드

// 1. join()
// 배열을 문자열로 만들어 준다.
{
  const fruits = ['apple', 'banana', 'orange'];
  // const result = fruits.join(); // applebananaorange
  const result = fruits.join(', ');
  console.log(result) // apple, banana, orange
}


// 2. split()
// 문자열을 배열로 만들어 준다.
{
  const fruits = 'apple, banana, orange';
  // const result = fruits.split(); // ['apple, banana, orange']
  const result = fruits.split(',');
  console.log(result); // ['apple', 'banana', 'orange']
}

// 3. reverse()
// 배열의 순서를 반대로 만들어 준다.
{
  const fruits = [1, 2, 3, 4, 5];
  const result = fruits.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(fruits); // [5, 4, 3, 2, 1]
}

// 4. splice()
// 선정한 배열의 값을 복사해서 가져온다.
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.slice(0, 2);
  console.log(result); // ['apple', 'banana']
  console.log(fruits); // ['apple', 'banana', 'orange']
}

// 5. find()
// 배열 맨 앞에서부터 조건을 확인하여 조건이 맞는 1개만 찾아서 바로 반환해 준다.
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled,
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 27, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 50, false, 66),
  new Student('E', 12, true, 88),
]
{
  const result = students.find(function(student, index) {
    console.log(student, index);
    // return student.score >= 70;
    // result
    // {name: 'B', age: 27, enrolled: false, score: 80}
  });
  // console.log(result);
}

// result
// Student {name: 'A', age: 29, enrolled: true, score: 45} 0
// Student {name: 'B', age: 27, enrolled: false, score: 80} 1
// Student {name: 'C', age: 30, enrolled: true, score: 90} 2
// Student {name: 'D', age: 50, enrolled: false, score: 66} 3
// Student {name: 'E', age: 12, enrolled: true, score: 88} 4


// 6. filter()
// 조건에 맞는 값만 반환하여 배열로 만들어 준다.
{
  const result = students.filter((student) => {
    // 조건에 만족한 값들만 넣어준다.
    return student.age > 20;
  });
  
  // console.log(result); // [Student, Student, Student, Student]
}

// 7. map()
// 배열 안의 객체에서 원하는 조건을 찾아서 조건에 맞는 객체들의 값 부분만을 배열로 돌려받는 일을 한다.
{
  const result = students.map(student => student.score);
  console.log(result); // [45, 80, 90, 66, 88]
}

// 8. some(), every()
// some은 하나라도 조건에 맞는 사람이 있다면 true
// every는 모두가 조건에 만족할 경우 true
{
  const result1 = students.some(student => student.score < 50);
  console.log(result1); // true
  const result2 = students.every(student => student.score < 50);
  console.log(result2); // false
}

// 9. reduce()
// 배열의 모든 요소들의 값을 누적할 때 사용.(값을 첫번째 인덱스에서 마지막 인덱스로 읽어옴.)
// reduceRight()
// 배열의 모든 요소들의 값을 누적할 때 사용.(값을 마지막 인덱스에서 첫번쨰 인덱스로 읽어옴.)
console.clear();
{
  const result = students.reduce((prev, curr) => {
    console.log(prev); // number값
    console.log(curr); // Student Object
    console.log('------------');
    // return curr;
    // return curr.score;
    return prev + curr.score;
  }, 0); // 0은 처음 시작할 숫자를 준 것으로 다른 숫자를 줘도 된다.
  console.log(result / students.length); // 73.8
}

// 10. map()
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  
  // console.log(result); // 80,90,66,88
}

// 11. map()
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  // console.log(result); // 90,88,80,66,45
}