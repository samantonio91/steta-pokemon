import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/containers/CreatePokemon.css"
import { Link } from 'react-router-dom'
import PokemonCardData from '../components/PokemonCardData'
import PokemonCardInput from '../components/PokemonCardInput'
const CreatePokemon = ({ pokemonListData }) => {
  
  return (
    <div>
      <Link to={'/'}>
      <h1>Create Pokemon</h1>
      </Link>
      <div className="containerCreatePokemon">
        <PokemonCardData />
        <PokemonCardInput />
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
    // addNewPokemon: (pokemon) => dispatch(addNewPokemonToTheList(pokemon))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePokemon);
