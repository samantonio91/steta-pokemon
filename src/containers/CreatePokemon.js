import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/containers/CreatePokemon.css"
import { Link } from 'react-router-dom'
import PokemonCardData from '../components/PokemonCardData'
import PokemonCardInput from '../components/PokemonCardInput'
import usePokeData from '../hooks/usePokeData'
import { addNewPokemonToTheList } from '../actions/pokemonListActions'
const CreatePokemon = ({ addNewPokemon }) => {
  const {pokemonName, pokemonType, pokemonWeight, pokemonImage, setPokemonName, setPokemonType, setPokemonWeight, setPokemonId} = usePokeData();
  return (
    <div>
      <Link to={'/'}>
      <h1>Create Pokemon</h1>
      </Link>
      <div className="containerCreatePokemon">
        <PokemonCardData pokemonName={pokemonName} pokemonType={pokemonType} pokemonWeight={pokemonWeight} pokemonImage={pokemonImage} />
        <PokemonCardInput setPokemonName={setPokemonName} setPokemonType={setPokemonType} setPokemonWeight={setPokemonWeight} setPokemonId={setPokemonId}/>
        <button onClick={() => addNewPokemon({ name:pokemonName, abilities: ["overgrow", "chlorophyll"], weight: pokemonWeight, pokemonImage })}>Save pokemon</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    pokemonListData: state.pokemonListData.pokemonList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPokemon: (pokemon) => dispatch(addNewPokemonToTheList(pokemon))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePokemon);
