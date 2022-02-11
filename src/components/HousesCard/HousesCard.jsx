import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import './HousesCard.scss';

export const HousesCard = ({house}) => {

  /* console.log(house); */
  house.logoURL = !house.logoURL  ?  "./images/house.png" : house.logoURL;
  return <div className="housescard-card">
    
   {/*  {house.logoURL &&  
      <Link to={generatePath("/houses/:name", {name: house.name})}>
      <img src={house.logoURL} alt={house.name} />
      </Link>
    } */}
    
    <Link to={generatePath("/houses/:name", {name: house.name})}>
      
      <img className="housescard-img" src={house.logoURL} alt={house.name} />
      <h3 className="housescard-title">{house.name}</h3>
      
      </Link>
      
      
  </div>
};
