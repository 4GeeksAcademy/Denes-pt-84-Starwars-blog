import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const CardPersonajes = ({name, uid, handleAddToFavourites, type}) => {
  
  return (
    <div>
      <div className="card" style={{width:"18rem"}}>
        <img id="cardPicture" src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} onError={(e)=>{e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}} className="card-img-top" alt={`foto de ${name}`}></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`personajes/${uid}`}> Learn More!</Link>
          <button type="button" id='addFavourites' className="btn btn-light" onClick={()=>handleAddToFavourites({name, uid}, type)}><i class="fa-regular fa-heart"></i></button>
        </div>
      </div>
    </div>
  )
}
export default CardPersonajes;