import React, { useState, useEffect } from "react";
import "./CharactersCardDetail.scss";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Context } from "../../../App";

export const CharactersCardDetail = ({ character, houses }) => {
  const {t} = React.useContext(Context);
  //console.log(character);
  //console.log(houses)

  return (
    <div className="Character-card-main">
      <div className="Character-card-image">
        <img className="img" src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </div>

      <div className="Character-card-details">
        <div className="Character-card-detail">
          <h3>{t('house')}</h3>
          
          {houses.length != 0 && (
            <img
              className="Character-card__detail-img"
              src={houses[0].logoURL}
              alt={houses[0].name}
            />
          )}
        </div>

        <div className="Character-card-detail">
          <h3>{t('alliances')}</h3>
          {character.length != 0 &&
            character.allegiances.map((allegiance) => {
              return <p key={allegiance}>{allegiance}</p>;
            })}
        </div>

        <div className="Character-card-detail">
          <h3>{t('appearances')}</h3>
          <SimpleBar className="simplebar-heigth" style={{ maxHeight: "30vh" }}>
          {character.length != 0 &&
            character.appearances.map((appearance) => {
              return <p key={appearance}>{appearance}</p>;
            })}
            </SimpleBar>
        </div>

        <div className="Character-card-detail">
          <h3>{t('father')}</h3>
          <p>{character.father}</p>
        </div>

        <div className="Character-card-detail">
          <h3>{t('siblings')}</h3>
          {character.length != 0 &&
            character.siblings.map((sibling) => {
              return <p key={sibling}>{sibling}</p>;
            })}
        </div>

        <div className="Character-card-detail">
          <h3>{t('titles')}</h3>
          <SimpleBar className="simplebar-heigth" style={{ maxHeight: "30vh" }}>
          {character.length != 0 &&
            character.titles.map((title) => {
              return <p key={title}>{title}</p>;
            })}
            </SimpleBar>
        </div>
      </div>
    </div>
  );
};
