import React, { useEffect, useState } from 'react'
import Pokedex from '../components/Pokedex'
import axios from 'axios'
import '../assets/styles/containers/Home.css'
const Home = () => {
  const [currentPokemonData, setCurrentPokemonData] = useState({})
  const [currentPokemonID, setCurrentPokemonID] = useState(1)
  const getPokemonDataByIDAndSetData = async () => {
    if (!currentPokemonID) {
      return
    }
    const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${currentPokemonID}`)
    const { data } = pokemonData
    const { abilities, name, weight } = data
    const allAbilities = []
    abilities.forEach((abilityData) => {
      allAbilities.push(abilityData.ability.name)
    })
    setCurrentPokemonData({
      abilities: allAbilities, name, weight, pokemonImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemonID}.png`
    })

  }

  useEffect(() => {
    getPokemonDataByIDAndSetData()
  }, [currentPokemonID])
  return (
    <div className="homeContainer">
      <label >Enter an ID for your pokemon</label>
      <input type="number" onChange={(e) => setCurrentPokemonID(e.target.value)} />
      <Pokedex name={currentPokemonData.name} abilities={currentPokemonData.abilities} weight={currentPokemonData.weight} pokemonImage={currentPokemonData.pokemonImage} />
    </div>
  )
}

export default Home
