import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardPersonajes from "../component/CardPersonajes";
import CardPlanetas from "../component/CardPlanetas";
import { Context } from "../store/appContext";
import CardStarships from "../component/CardStarships";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPersonajes()
		actions.getPlanetas()
		actions.getStarships()

	}, [store.personajes, store.planetas, store.starships])

	const handleAddToFavourites = (item, type)=> {
		console.log("Item recibido", item)
		console.log(type)
		
		const updatedFavourites = store.Favourites.filter((fav)=> fav.name !== item.name || fav.type !== type)
		if(!updatedFavourites.find(fav => fav.name === item.name)){
		  updatedFavourites.push(item)
		  actions.setFavourites(updatedFavourites)
		  console.log("Elemento agregado", item);
		  
		} else {
		  alert(`${item.name} Ya esta en Favoritos`)
		}
	  }
	return (
		<div>
			<div className="text-center">
				<h1>Blog de Starwars</h1>
			</div>
			<div><h2>Personajes</h2></div>
			<div className="personajes"> 
				{store.personajes.map((personajes, index) => {
					return (
						<CardPersonajes key={index}
							name={personajes.name}
							uid={personajes.uid}
							handleAddToFavourites={handleAddToFavourites} 
							type="personaje"/>

					)
				})}
			</div>
			<div><h2>Planetas</h2></div>
			<div className="planetas">
			{store.planetas.map((planetas, index) => {
					return (
						<CardPlanetas key={index}
							name={planetas.name}
							uid={planetas.uid}
							handleAddToFavourites={handleAddToFavourites} 
							type="planeta"/>
					)
				})}
			</div>
			<div><h2>Starship</h2></div>
			<div className="starships">
				{store.starships.map((starships, index)=>{
					return (
						<CardStarships key ={index}
						name={starships.name}
						uid={starships.uid}
						handleAddToFavourites={handleAddToFavourites}
						type="starship" />
					)
				})}
			</div>
		</div>
	)
};
