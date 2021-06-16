import React from 'react'
import { connect } from 'react-redux'
import { addNewPokemonToTheList } from '../actions/pokemonListActions'
import { Link } from 'react-router-dom'
const Pokedex = ({ name, abilities, weight, pokemonImage, addNewPokemon, state }) => {

  return (
    <div className="pokemonCard">

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
