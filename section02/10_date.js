// 1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자
let date2 = new Date(1997, 1, 5, 23, 59, 59);

// 2. 타임 스탬프
let ts1 = date1.getTime();
let date4 = new Date(ts1);
// date1과 date4 동일함

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월은 0부터 시작
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간은 제외하고 날짜만 출력하기
console.log(date1.toLocaleString()); // 현지화된 형태로 시간이 문자열로 출력됨
