import React, { useEffect, useState } from 'react';
import './PokemonSearch.css';

import FilterButton from './FilterButton';

const PokemonSearch = ({
  setLoading,
  pokemon,
  colors,
  setFilteredPokemon,
  setGeneration,
  setNoResults,
  searching,
  setSearching,
}) => {
  const types = [
    'fire',
    'grass',
    'water',
    'electric',
    'ground',
    'rock',
    'fairy',
    'poison',
    'bug',
    'dragon',
    'psychic',
    'flying',
    'fighting',
    'normal',
    'ghost',
    'ice',
    'dark',
    'steel',
  ];

  const generations = ['Generation I', 'Generation II', 'Generation III'];

  const clearSearch = () => {
    setNoResults(false);
    setFilteredPokemon([]);
    setSearching(false);
    setInputData('');
  };

  const [inputData, setInputData] = useState('');

  const onChange = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {
    if (inputData) {
      setFilteredPokemon(
        pokemon.filter((p) => p.data.name.includes(inputData.toLowerCase()))
      );
      setSearching(true);
    }

    if (!inputData) {
      setFilteredPokemon([]);
      setSearching(false);
    }
  }, [inputData]);

  return (
    <div className='pokemon-search'>
      <input
        className='searchbar'
        type='text'
        placeholder='Enter a Pokémon Name'
        name='input'
        onChange={onChange}
        value={inputData}
      />
      <div className='generation'>
        {generations.map((gen) => (
          <FilterButton
            setLoading={setLoading}
            key={gen}
            generations={generations}
            gen={gen}
            pokemon={pokemon}
            setGeneration={setGeneration}
          />
        ))}
      </div>
      <div className='types'>
        {types.map((type) => (
          <FilterButton
            key={type}
            type={type}
            pokemon={pokemon}
            setFilteredPokemon={setFilteredPokemon}
            colors={colors}
            setNoResults={setNoResults}
            setSearching={setSearching}
          />
        ))}
      </div>
      {searching && (
        <div className='clear'>
          <button onClick={clearSearch} className='clear-btn btn'>
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
