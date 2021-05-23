import React from 'react';
import './style.css';

const Button = ({data, handleClick, btnText}) => {

  // const [btnText, setbtnText] = React.useState(data.buttonLabelHide)
  console.log(data)
  return <><button className={"btn"} onClick={handleClick}>{btnText}</button></>
}

export default Button;
