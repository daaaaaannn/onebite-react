// 함수선언
function greeting() {
  console.log('안녕하세요.');
}

greeting(); // 함수호출 ()필수!!

// 함수2
// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;

//   console.log(area);
// }
// getArea();

function getArea(width, height) {
  // 매개변수
  function another() {
    console.log('another');
  }
  another(); // 중첩함수
  let area = width * height;

  return area; // 반환값
}
let area1 = getArea(10, 20); // 인수
console.log(area1);

// 호이스팅
// -> 선언문을 호출문보다 아래에 두어도 실행됨
