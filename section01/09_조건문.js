// 1. if 조건문
let num = 10;

if (num >= 10) {
  console.log('num은 10이상 입니다.');
} else if (num >= 3) {
  console.log('hi');
} else {
  console.log('num은 10 이상이 아닙니다.');
}

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.
let animal = 'cat';

switch (animal) {
  case 'cat': {
    console.log('고양이');
    break;
  }
  case 'dog': {
    console.log('강아지');
    break;
  }
  case 'bear': {
    console.log('곰');
    break;
  }
  case 'snake': {
    console.log('뱀');
    break;
  }
  case 'tiger': {
    console.log('호랑이');
    break;
  }
  default: {
    console.log('일치하는 동물이 없습니다.');
  }
}
