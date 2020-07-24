import axios from 'axios';

// Constantes
const initialData = {
	array : [],
	offset: 0

}

// types
const GET_POKEMONS_OK = 'GET_POKEMONS_OK';
const NEXT_POKEMON_OK = 'NEXT_POKEMON_OK';


// Reducer
export default function pokeReducer(state = initialData, action){
	switch(action.type){
		case GET_POKEMONS_OK:
			return {...state, array: action.payload}
		case NEXT_POKEMON_OK:
			return {...state, array: action.payload.array, offset: action.payload.offset}
		default: 
			return state
	}
}

// Acciones 

export const obtainPokemonsAction = () => async (dispatch, getState) => {

	const { offset } = getState().pokemons

	try {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
		dispatch({
			type: GET_POKEMONS_OK,
			payload: res.data.results
		})
	} catch (error) {
		console.log(error);
	}
}

export const nextPokemonAction = (numero) => async (dispatch, getState) => {

	const { offset } = getState().pokemons
	const siguiente = offset + numero

	try {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
		dispatch({
			type: NEXT_POKEMON_OK,
			payload: {
				array: res.data.results,
				offset: siguiente
			}
		})
	}

	catch(error) {
		console.log(error);
	}
}
