// 1. spread 연산자
// -> spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function func1(p1, p2, p3) {}
func1(...arr1);

// 2. rest 매개변수
// -> rest는 나머지, 나머지 매개변수

function funcB(one, ...dan) {
  console.log(dan);
  // 배열 형태로 뜸
}
funcB(...arr1);
