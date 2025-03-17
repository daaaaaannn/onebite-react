// 1. 콜백함수
// function main(value) {
//   console.log(value);
// }

// function sub() {
//   console.log('I an sub');
// }
// main(sub); // 이렇게 하면 sub함수 자체가 출력됨

function main(value) {
  value();
  console.log('end');
}

// function sub() {
//   console.log('I an sub');
// }
// main(sub); // value();로 작성하면 sub 함수가 실행됨

main(() => {
  console.log('I am sub');
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) callback(i);
}
// function repeatDouble(count) {
//   for (let i = 1; i <= count; i++) console.log(i * 2);
// }

repeat(5, (i) => {
  console.log(i);
});
// repeatDouble(5);
