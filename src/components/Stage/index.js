import React from 'react';
import './style.css';

const Stage = ({data}) => {
  return (
    <div className="stage-wrapper" style={{
      backgroundImage: `url(${data.image})`
    }}>
      <div className="stage-container">
        <h1>{data.siteTitle}</h1>
        <h4>{data.siteSubTitle}</h4>
      </div>
    </div>
  )
}

export default Stage;
