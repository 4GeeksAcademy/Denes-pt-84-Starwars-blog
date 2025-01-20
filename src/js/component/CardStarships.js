import React from 'react'
import { Link } from 'react-router-dom'

const CardStarships = ({name, uid, handleAddToFavourites, type}) => {
  return (
    <div>
        <div className="card" style={{width:"18rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} onError={(e)=>{e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}} 
        className="card-img-top" alt={`foto de ${name}`}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
         <Link to={`starships/${uid}`}> Learn More!</Link>
          <button type="button" id='addFavourites' className="btn btn-light" onClick={()=>handleAddToFavourites({name, uid}, type)}><i className="fa-regular fa-heart"></i></button>
        </div>
      </div>
    </div>
  )
}

export default CardStarships