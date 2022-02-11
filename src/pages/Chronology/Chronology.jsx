import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../api/fetchToApi';
import { Context } from "../../App";
import { ChronologyCard } from "../../components/ChronologyCard/ChronologyCard";
import './Chronology.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const Chronology = () => {
  const {page, setPage,setSearch} = React.useContext(Context);
  const [characters, setCharacters] = useState([]);
  const [direction, setDirection] = useState(true);
  

  useEffect(() => {
    setSearch('')
    getCharacters().then((data) => setCharacters(data))
    setPage("Chronology");
    
    page === "Home"
    ? document.body.classList.add("home")
    : document.body.classList.length !== 0 &&
      document.body.classList.remove("home");
  }, [page]);
  
  return (
  
    <SimpleBar className="simplebar-heigth" style={{ maxHeight: "70vh" }}>
  <div className="chronology-container">
    
    <button className="chronology-button" onClick={() => setDirection(!direction)}>O</button>
    {direction === true ? <img className="chronology-img" src="./images/down.png" alt="down-arrow" /> : <img className="chronology-img" src="./images/up.png" alt="up-arrow" /> }
    
    <div className="chronology-list">

     {characters.length !== 0 && characters.filter(character => character.age !== null && character.age.age > 0).sort((a, b) => {
       
       if (a.age.age > b.age.age) {
         return direction ? 1 : -1;
       }
       if (a.age.age < b.age.age) {
         return direction ? -1 : 1; 
       }
       return 0;
       
     }).map((character) => {
        return <ChronologyCard key={character.id} character={character} />
      })}

      </div>
    </div>
    </SimpleBar>);
};
