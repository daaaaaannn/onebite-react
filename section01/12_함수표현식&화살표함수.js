// 1. 함수 표현식 (varB)
// 호이스팅이 적용되지 않음
function funcA() {
  console.log('funcA입니다.');
}

let varA = funcA;
varA();
// 함수를 선언하지 않고 변수에 담 듯 가능
let varB = function funcB() {
  console.log('funcB입니다.');
};
varB();
// funcB(); 는 불가능 -> 그래서 funcB를 생략함 => 익명함수라 함

// 2. 화살표 함수
// let varC = () => {
//   return 1;
// };
let varC = () => 1;
let varc = (value) => value + 1;
