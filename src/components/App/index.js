import React from 'react';
import Button from '../Button';
import Stage from '../Stage';
import Cards from '../Cards';
import data from '../../data.json';
import './style.css';

class App extends React.Component{ 
  render() {
    console.log(data)
    return (
      <div className="container">
        <Stage data={data.page.components[0]} />
        <Cards data={data.page.components[1]} />
        <Button data={data.page.components[2]} />
      </div>
    );
  }
}

export default App;
