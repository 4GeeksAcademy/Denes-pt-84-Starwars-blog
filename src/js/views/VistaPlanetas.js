import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const VistaPlanetas = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams(); 

     useEffect(() => {
        actions.getSinglePlanet(uid); 
      }, [uid]); 

      if (!store.singlePlanet) {
        return <div>Cargando detalles del planeta...</div>;
      }

      const { diameter, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, name} = store.singlePlanet;
    
  return (
    <div className="divGeneral">
      <div className="banner">
        <h1>{name}</h1>
      </div>
      <div className="generalInfo">
        <div className="leftInfo">
          <p>Diameter: {diameter}</p>
          <p>Rotation period: {rotation_period}</p>
          <p>Orbital period: {orbital_period}</p>
          <p>Gravity: {gravity}</p>
          
        </div>
        <div className="profilePicture">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
            onError={(e)=>{e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}}
            alt="character"
          />
        </div>
        <div className="rightInfo">
          <p>Climate: {climate}</p>
          <p>terrain: {terrain}</p>
          <p>Surface water: {surface_water}</p>
          <p>Population: {population}</p>
        </div>
      </div>
    </div>
  )
}

export default VistaPlanetas