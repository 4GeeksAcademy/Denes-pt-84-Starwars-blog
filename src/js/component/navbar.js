import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context); 
	
	const handleDelete = (index)=> {
		actions.deleteFav(index)
	}
	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img id="starwarsIcon" src="https://images.seeklogo.com/logo-png/13/1/star-wars-logo-png_seeklogo-131743.png?v=1957936112895841208"></img></span>
			</Link>
			<div className="btn-group dropstart" >
				<button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="favButton"> 
					Favourites
				</button>
				<ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
					{store.Favourites.map((fav, index)=>{

						console.log(store.Favourites)
						return(
						<li key={index} className="listFav"><a className="dropdown-item" href="#">{fav.name}</a><i className="fa-solid fa-trash-can" onClick={()=>{handleDelete(index)}} ></i></li>
						)
						}
					)}
				</ul>
			</div>
		</nav>
	);
};
