import React from "react";
import { Context } from "../../App";
import { BackButton } from "../BackButton/BackButton";
import { Search } from "../Search/Search";
import {Link} from 'react-router-dom';
import "./Header.scss";

export const Header = () => {
  const { page, setSearch,changeLanguage } = React.useContext(Context);
  
  const changeSearch = (value) =>{
    setSearch(value);
    
  }

  return (
    <div className="header">
      <div>
      {(page === "Characters" || page === "Houses") && <div className="search">
         <Search changeSearch={changeSearch}/>
      </div>}

      {(page === "CharactersDetail" ||
          page === "HousesDetail") && <div className="back">
         <BackButton />
      </div>}
      </div>

      <div className="header_flags">
        {page !== "Home" && <Link to="/"><img src="/images/home.png" alt="home" /></Link>}
        <img src="/images/spain.png" alt="spain" onClick={() => changeLanguage('es')}/>
        <img src="/images/united-kingdom.png" alt="united-kingdom" onClick={() => changeLanguage('en')}/>
      </div>
    </div>
  );
};
