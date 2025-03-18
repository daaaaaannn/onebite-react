// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 변경하도록 변환해주는 키워드
// 동기적으로 작동하는 함수를 비동기 작업을 하는, 프로미스를 반환하는 함수로 바꿔줌
// 프로미스를 반환하는 함수라면 그냥 프로미스가 반환되도록 내버려 둠

// async function getData() {
//   return {
//     name: '김다은',
//     age: '23',
//   };
// }

// console.log(getData());
// promise를 반환하고 결과값은 객체

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: '김다은',
        age: '23',
      });
    }, 2000);
  });
}

console.log(getData());

// await과 함께 사용했을 때 좋음
// async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
  const data = await getData();
  // 비동기 작업이 종료되기까지 기다렸다가 종료되면 결과 값을 넣어줌
  console.log(data);
}
