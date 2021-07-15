import React, { useState } from 'react';
import './PokemonSearch.css';

import FilterButton from './FilterButton';
import InputSearch from './InputSearch';

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

  return (
    <div className='pokemon-search'>
      <InputSearch
        pokemon={pokemon}
        inputData={inputData}
        setInputData={setInputData}
        setFilteredPokemon={setFilteredPokemon}
        setSearching={setSearching}
        setNoResults={setNoResults}
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
