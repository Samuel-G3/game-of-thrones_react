import React from 'react';
import './ChronologyCard.scss';

export const ChronologyCard = ({character}) => {
  return <div className="chronologycard-container">
    <h3 className="charactercard-age">{character.age.age}</h3>
    <h3 className="charactercard-title">{character.name}</h3>
    <img className="charactercard-img" src={character.image} alt={character.name} />
    </div>;



};
