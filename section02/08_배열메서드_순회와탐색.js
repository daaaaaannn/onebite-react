// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, i, arr) {
  console.log(i, item * 2);
});

let doubleArr = [];

arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let inInclude = arr2.includes(3); // true 반환

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(3); // 2를 반환
// 동일한 값이 여러 개 있다면, 가장 앞의 인덱스를 반환
// 존재하지 않는 값의 인덱스를 찾아달라고 하면 -1 반환

// 그럼 왜 findIndex를 사용할까?
let objectArr = [{ name: '김다은' }, { name: '김가은' }];
console.log(objectArr.indexOf({ name: '김다은' }));
// 이렇게 하면 -1 반환
console.log(objectArr.findIndex((item) => item.name === '김다은'));

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는(콜백함수가 참을 반환한다는 뜻) 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
let findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
}); // 0 반환
let findedIndex1 = arr4.findIndex((item) => item % 2 !== 0); // 가능
// 만족하는게 없다면 -1을 반환

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: '김다은' }, { name: '김가은' }];
let finded = arr5.find((item) => item.name === '김다은');
// { name: '김다은' } 반환
