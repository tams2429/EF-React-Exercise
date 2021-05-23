import React from 'react';
import './style.css';

const Button = ({handleClick, btnText}) => {
  return <button className={"btn"} onClick={handleClick}>{btnText}</button>
}

export default Button;
