import React, { useState, useEffect } from 'react';
import {getHousesByName} from '../../../api/fetchToApi';
import { useParams } from 'react-router-dom';
import { Context } from "../../../App";
import { HousesCardDetail} from '../../../components/HousesCard/HousesCardDetail/HousesCardDetail';

export const HousesDetail = () => {
  const {page, setPage} = React.useContext(Context);


    const [houses, setHouses] = useState([]);
    const {name} = useParams('name');

  useEffect(() => {
    getHousesByName(name).then((data) => setHouses(data))
    setPage("HousesDetail");
    console.log(page);
    page === "Home"
    ? document.body.classList.add("home")
    : document.body.classList.length !== 0 &&
      document.body.classList.remove("home");
  },[page])
  console.log(houses);


  return <div>
    <HousesCardDetail house={houses} />
  </div>;
};