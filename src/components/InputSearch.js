import React, { Fragment, useEffect } from 'react';
import './InputSearch.css';

const InputSearch = ({
  pokemon,
  inputData,
  setInputData,
  setFilteredPokemon,
  setSearching,
  setNoResults,
}) => {
  const onChange = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {
    const results = pokemon.filter((p) =>
      p.data.name.includes(inputData.toLowerCase())
    );

    if (inputData && !results.length) {
      setFilteredPokemon([]);
      setSearching(true);
      setNoResults(true);
    }

    if (inputData && results.length) {
      setFilteredPokemon(results);
      setSearching(true);
      setNoResults(false);
    }

    if (!inputData) {
      setFilteredPokemon([]);
      setSearching(false);
    }
  }, [inputData, pokemon, setFilteredPokemon, setSearching, setNoResults]);

  return (
    <Fragment>
      <input
        className='searchbar'
        type='text'
        placeholder='Search by Pokémon Name...'
        name='input'
        onChange={onChange}
        value={inputData}
      />
    </Fragment>
  );
};

export default InputSearch;
