import React from 'react';
import './style.css';

const Button = ({data}) => {
  console.log(data)
  return <>This is the Button component. Please use the button to hide/show the cards. <a className={"btn"} href={"/"}>{data.buttonLabelHide}</a></>
}

export default Button;
