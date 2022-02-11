import React from 'react';
import "./Search.scss"
import { Context } from "../../App";

export const Search = ({changeSearch}) => {  
  const {t} = React.useContext(Context);
  
const handleInput = (ev) => {
  const {value} = ev.target;
  changeSearch(value);
};
  return <div className="form">
<img className="img-search" src="/images/search.png" alt="search" />
  <form>
    
    <input
      type="text" onChange={handleInput} placeholder={t('search')}
    />
  </form>
</div>;
};
