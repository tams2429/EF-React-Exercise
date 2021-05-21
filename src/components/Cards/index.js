import React from 'react';
import './style.css';

const Cards = ({data}) => {
  console.log(data)
  return (
  // <>
  // This is the Cards component: Please loop through the "cards" in the data and render the Cards ...
    <section className="card-wrapper">
      <h2>{data.componentTitle}</h2>
      <div className="card-container">
        {data.cards.map((card,index) => {
          const {title, anchorUrl, anchorText, image, description} = card
          return (
            <div className="card" key={index}>
              <img src={image} alt="A random pic of concert"/>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={anchorUrl}>{anchorText}</a>
            </div>
          )
          // return <div>Card</div>
        })}
      </div>

    </section>
  )
  // </>
}

export default Cards;
