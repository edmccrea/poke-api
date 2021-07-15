import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import './App.css';
import axios from 'axios';

import PokemonList from './components/PokemonList';
import PokemonSearch from './components/PokemonSearch';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searching, setSearching] = useState(false);
  const [generation, setGeneration] = useState([1, 151]);
  const [loading, setLoading] = useState(true);

  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#b296e1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ghost: '#bba2e4',
    ice: '#dbf0fe',
    dark: '#b0bec5',
    steel: '#e3e5e5',
  };

  useEffect(() => {
    const getPokemon = async () => {
      let pokemonArray = [];
      for (let i = generation[0]; i <= generation[1]; i++) {
        pokemonArray.push(await fetchPokemonData(i));
      }
      setPokemon(pokemonArray);
      setLoading(false);
    };

    const fetchPokemonData = async (id) => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return res;
    };
    getPokemon();
    setFilteredPokemon([]);
  }, [generation]);

  return (
    <div className='container'>
      <h1 className='main-title'>Pokédex</h1>
      <p className='main-subtitle'>Rediscover all your favourite Pokémon</p>
      <PokemonSearch
        setLoading={setLoading}
        pokemon={pokemon}
        setPokemon={setPokemon}
        setFilteredPokemon={setFilteredPokemon}
        setGeneration={setGeneration}
        colors={colors}
        setNoResults={setNoResults}
        searching={searching}
        setSearching={setSearching}
      />
      {}
      {!loading ? (
        <PokemonList
          pokemon={pokemon}
          filteredPokemon={filteredPokemon}
          colors={colors}
          noResults={noResults}
        />
      ) : (
        <Loader loading={loading} />
      )}
    </div>
  );
}

export default App;
