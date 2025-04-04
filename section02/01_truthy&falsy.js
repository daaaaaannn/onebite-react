// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n;

// 2. truthy한 값
// -> 7가지 falsy한 값들 제외한 나머지 모든 값
let t1 = 'hello';
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log('person값이 없음');
    return;
  }
  console.log(person.name);
  // 객체의 특정 프로퍼티에 접근하는 기능들을 담고 있는 함수인 경우, 조건문으로 매개변수 값이 null이거나 undefined가 아님을 먼저 확인 해줘야 함.
}
person = { name: '김다은' };
printName(person);
