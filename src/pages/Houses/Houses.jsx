import React, { useState, useEffect }from 'react';
import {getHouses} from '../../api/fetchToApi';
import {HousesCard} from '../../components/HousesCard/HousesCard';
import { Context } from "../../App";
import './Houses.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const Houses = ({search}) => {
  const {page, setPage, setSearch} = React.useContext(Context);
  
  React.useEffect(() => {
    setSearch('');
    setPage("Houses");
    console.log(page);
    page === "Home"
    ? document.body.classList.add("home")
    : document.body.classList.length !== 0 &&
      document.body.classList.remove("home");
  }, [page]);
  

  const [houses, setHouses] = useState([]);
  useEffect(() => {
    getHouses().then((data) => setHouses(data))
  },[])
  console.log(houses);

  const filteredHouses = houses.filter((house) =>
    house.name.toLowerCase().includes(search)
  );
  console.log(filteredHouses)

  const resultHouses = filteredHouses.length > 0 ? filteredHouses : houses

  return (
    <SimpleBar className="simplebar-heigth" style={{ maxHeight: "70vh" }}>
  <div className="houses-list">
    {resultHouses.map((house) => {
        return <HousesCard key={house.id} house={house} />
      })}
  </div>
  </SimpleBar>
  );
  
};