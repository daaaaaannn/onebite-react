// 6가지의 요소 조작 메서드

// 1. push - 길이 반환
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
let popedItem = arr2.pop();
console.log(popedItem);
// 결과는 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
let shiftedItem = arr3.shift();
console.log(shiftedItem);
// 결과는 1

// 4. unshift - 길이 반환환
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [2, 3, 4];
let newLength2 = arr4.unshift(1);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 시작, 끝+1
// let sliced=arr5.slice(2) 도 가능함
let sliced2 = arr5.slice(-3); // [3,4,5] 출력

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatArr = arr6.concat(arr7);
