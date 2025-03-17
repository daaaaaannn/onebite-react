// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); -> 모듈러

let inf = Infinity; // 무한대
let ninf = -Infinity; // - 무한대
let nan = NaN; // 1+"hello" 하는 경우 NaN 출력됨

// 2. String Type
let myName = '김다은';
let myLocation = '수원';
let myIntroduce = myName + myLocation; // string type은 덧셈 연산도 지원함
console.log(myIntroduce);

// 템플릿 리터럴 문법 - 자주 쓰임
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
// `` 를 사용해서 중괄호를 통해 변수의 값을 동적으로 문자열에 포함시킬 수 있음
console.log(introduceText);

// 3. Boolean Type - 참 / 거짓만 저장하는 type & 현재의 상태를 의미하는 데 사용함
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. undefined Type
let none;
console.log(none);

// Null VS undefined
// Null 은 우리가 직접 명시적으로 변수에 할당 해줘야 하는 값. 이 변수에 어떠한 값도 없다를 표현할 때 사용하는 값
// Undefined는 진짜 변수를 선언하고 아무런 값도 할당하지 않았을 때 자동으로 들어가는 값, 변수를 초기화하지 못했거나 존재하지 않는 값을 불려오려고 할 때 발생할 수 있는 값
