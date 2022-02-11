import React, { useState, useEffect } from 'react';
import {getCharactersByName,getHousesByName} from '../../../api/fetchToApi';
import { useParams } from 'react-router-dom';
import { Context } from "../../../App";
import { CharactersCardDetail } from '../../../components/CharactersCard/CharactersCardDetail/CharactersCardDetail';

export const CharactersDetail = () => {
  const {page, setPage} = React.useContext(Context);

    const [characters, setCharacters] = useState([]);
    const [houses, setHouses] = useState([]);
    const {name} = useParams('name');

  useEffect(() => {
    getCharactersByName(name).then((data) => {
      setCharacters(data);
      getHousesByName(data.house).then((data) => setHouses(data));
      setPage("CharactersDetail");
      console.log(page);
      page === "Home"
      ? document.body.classList.add("home")
      : document.body.classList.length !== 0 &&
        document.body.classList.remove("home");
    })
    
  },[page])
  console.log(characters);


  return <div>
      <CharactersCardDetail character={characters} houses={houses}/>
  </div>;
};
