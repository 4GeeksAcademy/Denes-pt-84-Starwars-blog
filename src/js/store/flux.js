const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			starships: [],
			singleCharacter: null,
			singlePlanet: null,
			singleStarship: null,
			Favourites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPersonajes: async () => {
				try{
					const response = await fetch(`https://www.swapi.tech/api/people/`)
					if (!response.ok){
						console.error("Error al traer los datos")
					}
					const data = await response.json();
					setStore({personajes: data.results})
				} catch(error){
					console.error("Error al hacer fetch")
				}
			},
			getPlanetas: async ()=> {
				try{
					const response = await fetch(`https://www.swapi.tech/api/planets/`)
					if (!response.ok){
						console.log("Error al traer los datos");
					}
					const data = await response.json();
					setStore({planetas: data.results})
				} catch(error){
					console.log("Error al hacer fetch");
				}
			},
			getStarships: async ()=> {
				try{
					const response = await fetch(`https://www.swapi.tech/api/starships/`)
					if (!response.ok){
						console.log("Error al traer los datos");
					}
					const data = await response.json();
					setStore({starships: data.results})
				} catch(error){
					console.log("Error al hacer fetch");
				}
			},
			getSingleCharacter(uid) {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						setStore({
							singleCharacter: data.result.properties,
						})
					})
					.catch((error) => {
						console.error("Error al cargar datos del personaje", error);
					})
			},
			getSinglePlanet(uid) {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						setStore({
							singlePlanet: data.result.properties,
						})
					})
					.catch((error)=>{
						console-log("Error al cargar datos del planeta", error)
					})
			}, 
			getSingleStarships(uid){
				fetch(`https://www.swapi.tech/api/starships/${uid}`)
				.then((response)=>{
					return response.json()
				})
				.then((data)=>{
					setStore({
						singleStarship: data.result.properties
					})
				})
				.catch((error)=>{
					console.log("Error al cargar datos de las naves", error)
				})
			}, 
			addToFavourites(item){
				const store = getStore(); 
				const newFavourites = [...store.Favourites, item]
				setStore({Favourites: newFavourites})

			}, 
			setFavourites(favourites){
				setStore({Favourites: favourites})
			}, 
			deleteFav(index){
				const store = getStore(); 
				const newFavourites = [...store.Favourites]
				newFavourites.splice(index, 1)
				setStore({Favourites: newFavourites})
			}
		}
	};
};

export default getState;

//hacer un get para getSingleCharacter, planetas y starships, `https://www.swapi.tech/api/personajes/${uid}`, para los 3, 
