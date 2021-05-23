import React from 'react';
import Button from '../Button';
import Stage from '../Stage';
import Cards from '../Cards';
import data from '../../data.json';
import './style.css';

const App = () => {

  const [showCards, setshowCards] = React.useState(true)
  const [btnText, setbtnText] = React.useState(data.page.components[2].buttonLabelHide)

  const handleClick = () => {
    console.log('Clicked')

    if (btnText === data.page.components[2].buttonLabelHide) {
      setbtnText(data.page.components[2].buttonLabelShow)
    } else {
      setbtnText(data.page.components[2].buttonLabelHide)
    }

    setshowCards(!showCards)

  }

  // console.log(data)
  // console.log(showCards)
  // console.log(btnText)
  return (
    <div className="container">
      <Stage data={data.page.components[0]} />
      <Cards data={data.page.components[1]} showCards={showCards}/>
      <Button data={data.page.components[2]} handleClick={handleClick} btnText={btnText}/>
    </div>
  );
}

export default App;
