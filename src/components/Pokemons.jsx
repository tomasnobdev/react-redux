import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { obtainPokemonsAction, nextPokemonAction } from '../redux/pokeDucks'


const Pokemons = () => {

	const dispatch = useDispatch();

	const pokemons = useSelector(store => store.pokemons.array)

	return (

		<div>	
			list of pokemons
			<button onClick={() => dispatch(obtainPokemonsAction())}>Get Pokemons</button>
			<button onClick={() => dispatch(nextPokemonAction(20))}>Next Page</button>

			
				<ul>
					{
						pokemons.map(item => (
							<li key={item.name}>{item.name}</li>
							))
					}
				</ul>
			
		</div>

	)
}

export default Pokemons