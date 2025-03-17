// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; //전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {}
  // 함수도 변수처럼 지역 스코프를 가짐
  // 그러나 if문이나 for문 안에서는 지역 스코프를 가지지 않음
}

funcA();
// funcB(); 호출 불가능

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}
