console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000); // 3초가 지나면 코드가 수행됨
console.log(3); // 비동기 함수 : setTimeout -> WebAPIs가 대신해줌
// 1 3 2 출력
