const Button = ({ children, text, color = 'black' }) => {
  // onClick={() => {
  //   console.log(text);
  // }}
  // 이벤트 객체
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text}
      {children}
    </button>
  );
};
export default Button;
