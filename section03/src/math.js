// math 모듈

export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}

// MediaSourceHandle.exports = {
//   add,
//   sub,
// };

export default function multiply(a, b) {
  return a * b;
}
// math 모듈을 대표하는 단 하나의 기본 값이 됨
// import 할 때 중괄호 없이 불러와야 함
// import 할 때 이름 바꾸기 가능

// export { add, sub };
// 아니면 함수 앞에 exort 적어도 가능
