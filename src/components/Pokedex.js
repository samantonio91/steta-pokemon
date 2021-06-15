import React from 'react'
import { connect } from 'react-redux'
import { addNewPokemonToTheList } from '../actions/pokemonListActions'
import { Link } from 'react-router-dom'
const Pokedex = ({ name, abilities, weight, pokemonImage, addNewPokemon, state }) => {

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Pokemon name: {name}</h2>
      <p>Weight: {weight}</p>
      <img src={pokemonImage} alt="Pokemon IMG" />
      <button onClick={() => addNewPokemon({ name, abilities, weight, pokemonImage })}>Save pokemon</button>
      <Link to="/pokemonList"> Go to pokemon list</Link>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPokemon: (pokemon) => dispatch(addNewPokemonToTheList(pokemon))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
