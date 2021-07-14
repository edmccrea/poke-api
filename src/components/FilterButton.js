import React, { Fragment } from 'react';
import './FilterButton.css';

const FilterButton = ({
  setLoading,
  pokemon,
  setFilteredPokemon,
  generations,
  gen,
  setGeneration,
  type,
  colors,
  setNoResults,
  setSearching,
}) => {
  const filterByType = (type) => (event) => {
    const result = pokemon.filter((p) => p.data.types[0].type.name === type);
    if (result.length) {
      setFilteredPokemon(result);
      setNoResults(false);
      setSearching(true);
    }

    if (!result.length) {
      setFilteredPokemon([]);
      setNoResults(true);
      setSearching(true);
    }
  };

  const filterByGen = (gen) => (event) => {
    switch (gen) {
      case generations[0]:
        setGeneration([1, 151]);
        setLoading(true);
        break;
      case generations[1]:
        setGeneration([152, 251]);
        setLoading(true);
        break;
      case generations[2]:
        setGeneration([252, 386]);
        setLoading(true);
        break;
      default:
        setGeneration([1, 151]);
        setLoading(true);
    }
  };

  return (
    <Fragment>
      {type && (
        <button
          onClick={filterByType(type)}
          className='type-btn btn'
          style={{ backgroundColor: colors[type] }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      )}

      {gen && (
        <button onClick={filterByGen(gen)} className='gen-btn btn'>
          {gen}
        </button>
      )}
    </Fragment>
  );
};

export default FilterButton;
