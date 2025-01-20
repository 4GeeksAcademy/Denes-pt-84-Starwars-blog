import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";


const VistaStarships = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); 

  useEffect(() => {
    actions.getSingleStarships(uid); 
  }, [uid]); 

  
  if (!store.singleStarship) {
    return <div>Cargando detalles de la nave...</div>;
  }

  const { name, model, starships_class, manufacturer, cost_in_credits, lenght, crew, passengers, max_atmosphering_speed, hyperdrive_rating, MGLT, cargo_capacity, consumables } = store.singleStarship;


  return (
    <div className="divGeneral">
      <div className="banner">
        <h1>{name}</h1>
      </div>
      <div className="generalInfo">
        <div className="leftInfo">
          <p>Model: {model}</p>
          <p>Starships class: {starships_class}</p>
          <p>Manufacturer: {manufacturer}</p>
          <p>Cost: {cost_in_credits}</p>
          <p>Lenght: {lenght}</p>
          <p>Crew: {crew}</p>
        </div>
        <div className="profilePicture">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
            onError={(e)=>{e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}}
            alt="starship"
          />
        </div>
        <div className="rightInfo">
          <p>Passengers: {passengers}</p>
          <p>Max Speed: {max_atmosphering_speed}</p>
          <p>Hyperdrive: {hyperdrive_rating}</p>
          <p>{MGLT}</p>
          <p>Capacity: {cargo_capacity}</p>
          <p>Consumables: {consumables}</p>
        </div>
      </div>
    </div>
  )
}

export default VistaStarships