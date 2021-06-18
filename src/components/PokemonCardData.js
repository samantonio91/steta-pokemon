import React from 'react'
import { connect } from 'react-redux'
import { addNewPokemonToTheList } from '../actions/pokemonListActions'
import { Link } from 'react-router-dom'
import pokeBall from '../assets/svg/pokebola.svg'
const PokemonCardData = ({pokemonName, pokemonType, pokemonWeight, pokemonImage}) => {
  return (
    <div className="pokemonCard">
      <div className="cardHeader">  
        <img width="40" height="40" display="block" src={pokeBall} />
      </div>
      <div style={{display: 'flex'}}>
        <img src={pokemonImage} width="55" height="55" alt='poke image' />
        <h2>{pokemonName}</h2>
      </div>
      <h3>{pokemonType}</h3>
      <h3>{pokemonWeight}</h3>
    </div>
  )
}
export default PokemonCardData
