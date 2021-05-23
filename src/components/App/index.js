import React from 'react';
import Button from '../Button';
import Stage from '../Stage';
import Cards from '../Cards';
import data from '../../data.json';
import './style.css';

const App = () => {

  const {components} = data.page

  const [showCards, setshowCards] = React.useState(true)
  const [btnText, setbtnText] = React.useState(components[2].buttonLabelHide)

  const handleClick = () => {
    if (btnText === components[2].buttonLabelHide) {
      setbtnText(components[2].buttonLabelShow)
    } else {
      setbtnText(components[2].buttonLabelHide)
    }
    setshowCards(!showCards)
  }

  return (
    <div className="container">
      <Stage data={components[0]} />
      <Cards data={components[1]} showCards={showCards}/>
      <Button handleClick={handleClick} btnText={btnText}/>
    </div>
  );
}

export default App;
