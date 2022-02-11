import React from "react";
import "./HousesCardDetail.scss";
import { Context } from "../../../App";


export const HousesCardDetail = ({ house }) => {
  const {t} = React.useContext(Context);
  return (
    <div className="Houses-card-container">
      {house.length !== 0 && <img className="Houses-card-logo" src={house[0].logoURL} alt={house[0].name} />}
      <h2>{house[0] && house[0].name}</h2>

      <div className="Houses-card-main">
        <div className="Houses-card-detail">
          <h3>{t('words')}</h3>
          {console.log(house)}
          <p>{house[0] && house[0].words}</p>
        </div>

        <div className="Houses-card-detail">
          <h3>{t('seat')}</h3>
          <p>{house[0] && house[0].seat}</p>
        </div>

        <div className="Houses-card-detail">
          <h3>{t('region')}</h3>
          {house[0] &&
            house[0].region.map((region) => {
              return <p key={region}>{region}</p>;
            })}
        </div>

        <div className="Houses-card-detail">
          <h3>{t('alliances')}</h3>
          {house[0] &&
            house[0].allegiance.map((allegiances) => {
              return <p key={allegiances}>{allegiances}</p>;
            })}
        </div>

        <div className="Houses-card-detail">
          <h3>{t('religions')}</h3>
          {house[0] &&
            house[0].religion.map((religions) => {
              return <p key={religions}>{religions}</p>;
            })}
        </div>
      </div>
    </div>
  );
};
