import {useState, useEffect} from 'react'
const usePokeData = () => {
    const [pokemonName, setPokemonName] = useState(null)
    const [pokemonType, setPokemonType] = useState(null)
    const [pokemonWeight, setPokemonWeight] = useState(null)
    const [pokemonId, setPokemonId] = useState(1)
    const [pokemonImage, setPokemonImage] = useState(null)
    const getPokemonImageByIDAndSetData = (currentPokemonID) => {
        if (currentPokemonID <= 0 || currentPokemonID >= 899 || currentPokemonID === '') {
            return
        }
        setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemonID}.png`)
    }
    useEffect(() => {
        getPokemonImageByIDAndSetData(pokemonId)
      }, [pokemonId])
    return {pokemonName, pokemonType, pokemonWeight, pokemonImage, setPokemonName, setPokemonType, setPokemonWeight, setPokemonId};
}
export default usePokeData;