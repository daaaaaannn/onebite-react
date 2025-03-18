function returnFalse() {
  console.log('False함수');
  // return false;
  return undefined; // 가능
}

function returnTrue() {
  console.log('True함수');
  // return true;
  return 1;
}

console.log(returnFalse() && returnTrue());
console.log(returnFalse() || returnTrue());
console.log(returnTrue() && returnFalse());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || 'person 값이 없음');
}

printName();
printName({ name: '김다은' });
