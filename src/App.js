import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import './App.css';
import axios from 'axios';

import PokemonList from './components/PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemon = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await fetchPokemonData(i));
    }
    setPokemon(pokemonArray);
    setLoading(false);
  };

  const fetchPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className='container'>
      <h1 className='main-title'>Pokémon Starting Five</h1>
      <p className='main-subtitle'>
        Choose your favourite team of five Pokémon
      </p>
      {!loading ? (
        <PokemonList pokemon={pokemon} />
      ) : (
        <Loader loading={loading} />
      )}
    </div>
  );
}

export default App;
