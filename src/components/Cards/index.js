import React from 'react';
import './style.css';

const Cards = ({data, showCards}) => {

  const renderCards = () => {
    return (
      data.cards.map((card,index) => {
        const {title, anchorUrl, anchorText, image, description} = card
        return (
          <div className={`card card${index}`} key={index}>
            <img src={image} alt="A random pic of concert"/>
            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={anchorUrl}>{anchorText}</a>
            </div>
          </div>
        )
      }))
  }

  return (
    showCards
      ?
      <section className="card-wrapper">
        <h2>{data.componentTitle}</h2>
        <div className="card-container">
          {renderCards()}
        </div>
      </section>
      :
      <section className="card-wrapper">
        <h2>{data.componentTitle}</h2>
      </section>
  )
}

export default Cards;
