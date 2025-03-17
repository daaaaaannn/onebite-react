// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합 대입 연산자(산술+대입)
let num7 = 10;
num7 += 20;

// 4. 증감 연산자
let num8 = 10;
// num8++;
// 뒤에 ++이 붙게되면 다음 줄이 와서야 1이 증가함
console.log(num8++); // 이렇게 하면 console에 10이 출력됨 - 후위 연산
// 바로 적용되길 원하면 ++num8로 적어줘야 함. - 전위 연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
//= 3개를 쓰면 자료형까지 비교해줌

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
