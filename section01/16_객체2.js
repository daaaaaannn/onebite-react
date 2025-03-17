// 1. 상수 객체
const animal = {
  type: '강아지',
  name: '콩이',
  color: 'black',
};

animal.age = 10; // 추가
animal.color = 'white'; // 수정
delete animal.color; // 삭제

// animal = '123'; 이건 문제가 된다.

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: '김다은',
  // 메서드 선언
  sayHi() {
    console.log('안녕!');
  },
};
person.sayHi();
person['sayHi']();
