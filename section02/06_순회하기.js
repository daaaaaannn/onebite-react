// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
// length는 프로퍼티
// 참고 - 배열이나 함수도 객체이기 때문에 프로퍼티나 메서드를 가질 수 있음
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문 => 배열에서만 사용 가능
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: '김다은',
  age: 23,
  job: 'student',
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환
let keys = Object.keys(person);
console.log(keys);

for (let key of keys) {
  let value = person[key];
  console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);
console.log(values);
for (let value of values) {
  console.log(value);
}

// 2.3 for in => 객체에서만 사용 가능
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
