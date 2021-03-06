import React from 'react';

const AstronomyCard = (props) => {
  
	const { title,
    url,
    hdurl,
    explanation,
    date,
    copyright,
    media_type
   } = props.data
   
   
  return (
    <div>
      <h6>{title}</h6>
      <a href={hdurl}>
        <img src={url} alt={title}/>
      </a>

      <p>{explanation}</p>
      
      <span>{date}, {copyright} </span>
    </div>
  );
};

export default AstronomyCard;