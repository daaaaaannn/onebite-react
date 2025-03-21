import './Main.css';

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. true, null 등 안됨
// {obj}는 오류
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
// 4-1. 태그가 없다면 <>, </> 빈 태그로 묶어줘도 괜찮음
// style={{ backgroundColor: 'red', borderBottom: '5px solid blue' }}

const Main = () => {
  // const number = 10;
  // const obj = { a: 1 };
  const user = {
    name: '김다은',
    isLogin: true,
  };
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  // return (
  //   // <main>
  //   //   <h1>main</h1>
  //   //   <h2>{number + 10}</h2>
  //   //   {null}
  //   //   {[1, 2, 3]}
  //   //   {obj.a}
  //   // </main>
  //   <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>
  // );
};

export default Main;
