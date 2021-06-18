import React from 'react'
import { connect } from 'react-redux'
import { addNewPokemonToTheList } from '../actions/pokemonListActions'
import { Link } from 'react-router-dom'
const Pokedex = ({setPokemonName, setPokemonType, setPokemonWeight, setPokemonId}) => {
  return (
    <div className="pokemonCard">
        <label>Name</label>
        <input onChange={(e) => setPokemonName(e.target.value)} type="text" name="name" />
        <label>Type</label>
        <input onChange={(e) => setPokemonType(e.target.value)} type="text" name="type" />
        <label>Weight</label>
        <input onChange={(e) => setPokemonWeight(e.target.value)} type="number" name="name" />
        <label>ID</label>
        <input onChange={(e) => setPokemonId(e.target.value)} type="number" name="name" />
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
