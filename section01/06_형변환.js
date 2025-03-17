// 1. 묵시적 형 변환
// -> java script엔진이 알아서 형 변환 하는 것

// let num = 10;
// let str = '20';

// const result = num + str;
// console.log(result);
// num이 string type으로 묵시적으로 변함
// 변수 하나의 값만 형 변환했을 때 오류가 발생하지 않고 연산이 잘 종료될 수 있는 경우, 묵시적 형 변환 발생

// 2. 명시적 형 변환
// 프로그래머 내장함수 들을 이용해서 직접 형 변환을 명시
// 문자열 -> 숫자
let str1 = '10';
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = '10개';
let strToNum2 = parseInt(str2);
// parseInt => 숫자가 아닌 다른 값을 포함하고 있는 문자열을 숫자로 변환해줌
// 문자가 앞에 있으면 형 변환이 잘 안 이루어질 수 있음

console.log(strToNum2);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + '입니다.');
