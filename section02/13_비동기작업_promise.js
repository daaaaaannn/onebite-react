// const promise = new Promise((resoleve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor
//   setTimeout(() => {
//     console.log('안녕');
//     // resoleve('안녕');
//     reject('왜 실패했는지 이유...');
//     // 인수로 promise의 결과값을 전달해 줄 수 있음
//   }, 2000);
// });
// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = 10;
//     if (typeof num === 'number') {
//       resolve(num + 10);
//     } else {
//       reject('num은 숫자가 아닙니다.');
//     }
//   }, 2000);
// });
// // setTimeout(() => {
// //   console.log(promise);
// // }, 3000);

// // then 메서드
// // -> 그 후에
// // resolve를 실행한 후, then 메서드에 전달된 콜백 함수를 실행시켜 줌.
// // 그리고 resolve의 인수로 전달한 결과값을 매개변수로 제공해줌.
// // 비동기 작업 경과 값을 자유롭게 이용할 수 있음
// // reject로 실패하면 then은 실행되지 않음
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// // 실패한 경우, catch 메서드 사용
// // promising chaining이라고 함

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num은 숫자가 아닙니다.');
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);

    return add10(result);
    // newP.then((result) => {
    //   console.log(result);
    // }); 콜백 함수 길어지는 것 방지
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// then 사용법 찾아보기
