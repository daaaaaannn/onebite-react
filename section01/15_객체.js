// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티(객체 속성)
let person = {
  name: '김다은',
  age: '23',
  job: 'student',
  hobby: 'music',
  10: 20,
  extra: {},
  'like dog': true,
};
// key(문자열이나 숫자만 올 수 있음):value (value에 아무 값이나 와도 상관없음)

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);
// 존재하지 않는 프로퍼티를 꺼내 오려고 하면 undefined 출력
let age = person['age'];
let property = 'hobby';
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = 'student';
person['favoriteFood'] = '떡볶이';

// 3.3 프로퍼티를 수정하는 방법
person.job = 'fe developer';
person['favoriteFood'] = '초콜릿';

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person['favoriteFood'];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = 'name' in person;
let result2 = 'cat' in person;
