// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];
let [one, two, four = 4] = arr;
// 만약 four까지 저장하면 undefined로 저장됨

// 2. 객체의 구조 분해 할당
let person = {
  name: '김다은',
  age: '23',
  job: 'student',
};

let { name: myName, age, job } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, job }) => {
  console.log(name, age, job);
};
func(person);
