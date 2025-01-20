import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const VistaPersonajes = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); 

  useEffect(() => {
    actions.getSingleCharacter(uid); 
  }, [uid]); 

  
  if (!store.singleCharacter) {
    return <div>Cargando detalles del personaje...</div>;
  }

  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = store.singleCharacter;

  
  return (
    <div className="divGeneral">
      <div className="banner">
        <h1>{name}</h1>
      </div>
      <div className="generalInfo">
        <div className="leftInfo">
          <p>Birth year: {birth_year}</p>
          <p>Height: {height}</p>
          <p>Mass: {mass}</p>
          <p>Gender: {gender}</p>
        </div>
        <div className="profilePicture">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            onError={(e)=>{e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}}
            alt="character"
          />
        </div>
        <div className="rightInfo">
          <p>Eye color: {eye_color}</p>
          <p>Skin color: {skin_color}</p>
          <p>Hair color: {hair_color}</p>
        </div>
      </div>
    </div>
  );
};

export default VistaPersonajes;