import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
const PokemonList = ({ pokemonListData }) => {
  const [pokemonList, setPokemonList] = useState([])
  console.log('pokemonListData', pokemonListData)
  const RenderAbilities = ({ arrayAbilities }) => {
    return arrayAbilities.map((ability) => (<p>{ability}</p>))
  }
  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemonListData.map((pokemonData) => {
        const { abilities, name, weight, pokemonImage } = pokemonData
        return <div>
          <p>{name}</p>
          <p>{weight} KG</p>
          <img src={pokemonImage} alt="Pokemon IMG" />
          <p>Abilities</p>
          <RenderAbilities arrayAbilities={abilities} />
        </div>
      })}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    pokemonListData: state.pokemonListData.pokemonList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // addNewPokemon: (pokemon) => dispatch(addNewPokemonToTheList(pokemon))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
