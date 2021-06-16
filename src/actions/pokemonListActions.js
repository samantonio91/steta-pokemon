
import { ADD_POKEMON, CREATE_POKEMON } from "./actionsTypes"

export const addNewPokemonToTheList = (pokemon) => ({
  type: ADD_POKEMON,
  payload: pokemon
})