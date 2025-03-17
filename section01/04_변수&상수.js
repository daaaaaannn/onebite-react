// 1. 변수
let age;
console.log(age);
//undefined 출력됨

age = 30;
console.log(age);

//let age=40; 은 불가능

//2. 상수 - 초기화 필수 !
const birth = '2003.09.01';
// birth = '123'; 이렇게 작성하면 console에 오류 뜸
console.log(birth);

// 3. 변수 명명규칙 & 변수 네이밍 규칙
// 3-1. $, _ 제외한 기호는 사용할 수 없음.
// 3-2. 변수의 이름은 숫자로 시작할 수 없음.
// 3-3. 변수의 이름을 예약어로 사용할 수 없음.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
// 이런식으로 변수명은 친절하게 짓는게 좋음!
