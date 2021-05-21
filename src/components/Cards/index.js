import React from 'react';
import './style.css';

const Cards = ({data}) => {
  console.log(data)
  return <> 
  This is the Cards component: Please loop through the "cards" in the data and render the Cards ... 
    {/* {data.cards.map( card => {
      const {title, anchorUrl, anchorText, image, description} = card
      return <div>Card</div>
    })} */}
  </>
}

export default Cards;
