import React from 'react';
import './style.css';

const Stage = ({data}) => {
  console.log(data)

  return (
    <div className="stage-wrapper" style={{
      backgroundImage: `url(${data.image})`
    }}>
      <h1>{data.siteTitle}</h1>
      <h4>{data.siteSubTitle}</h4>
    </div>
  )
  // <> This is the Stage component</>
}

export default Stage;
