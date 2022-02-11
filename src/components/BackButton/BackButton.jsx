import React from 'react';
import { Context } from "../../App";
import {Link} from 'react-router-dom';
import "./BackButton.scss";

export const BackButton = () => {
  const {page, t} = React.useContext(Context);
  let fatherPage = "";
  fatherPage = page === "CharactersDetail" ? "characters" : "houses"

  return <div className="backButton">
  <Link to={`/${fatherPage}`}><img className="backButton-img" src="/images/back.png" alt="back" /><p className="backButton-txt">{t('back')}</p></Link>
  </div>;
};
