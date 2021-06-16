import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/containers/PokemonList.css"
import { Link } from 'react-router-dom'
const PokemonList = ({ pokemonListData }) => {
  const [pokemonList, setPokemonList] = useState([]);
  console.log("pokemonListData", pokemonListData);
  const RenderAbilities = ({ arrayAbilities }) => {
    return arrayAbilities.map((ability) => <>{ability},</>);
  };
  return (
    <div>
      <Link to={'/'}>
      <h1>Pokemon List</h1>
      </Link>
      <div className="pokemonListContainer">
        {pokemonListData.map((pokemonData) => {
          const { abilities, name, weight, pokemonImage } = pokemonData;
          return (
            <div className="pokemonCard">
              <h2>{name}</h2>
              <p>{weight} KG</p>
              <img width="80px" height="80px" src={pokemonImage} alt={`poken ${name}`} />
              <p>Abilities</p>
              <p>
              <RenderAbilities arrayAbilities={abilities} />
              </p>
            </div>
          );
        })}
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
export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
