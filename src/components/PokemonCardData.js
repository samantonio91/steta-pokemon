import React from 'react'
import { connect } from 'react-redux'
import { addNewPokemonToTheList } from '../actions/pokemonListActions'
import { Link } from 'react-router-dom'
import pokeBall from '../assets/svg/pokebola.svg'
const PokemonCardData = ({ name, abilities, weight, pokemonImage, addNewPokemon, state }) => {

  return (
    <div className="pokemonCard">
      <div className="cardHeader">  
        <img width="40" height="40" display="block" src={pokeBall} />
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PokemonCardData)
