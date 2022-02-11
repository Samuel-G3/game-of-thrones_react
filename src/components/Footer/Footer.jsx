import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.scss';
import { Context } from "../../App";

export const Footer = () => {
  const {t} = React.useContext(Context);

  return <div className="navbar">
      <NavLink to='/characters' className="navbar_link" activeclassname={"active"}>{t('characters')}</NavLink>
      <NavLink to='/houses' className="navbar_link" activeclassname={"active"}>{t('houses')}</NavLink>
      <NavLink to='/chronology' className="navbar_link" activeclassname={"active"}>{t('chronology')}</NavLink>
    </div>;
};
