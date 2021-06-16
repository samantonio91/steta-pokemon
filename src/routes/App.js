
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PokemonList from '../containers/PokemonList';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home'
import CreatePokemon from '../containers/CreatePokemon'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemonList" component={PokemonList} />
        <Route exact path="/createPokemon" component={CreatePokemon} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
