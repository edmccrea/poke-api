import React, { Fragment } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemon, filteredPokemon, colors, noResults }) => {
  return (
    <section className='pokemon-list'>
      {!filteredPokemon.length &&
        !noResults &&
        pokemon.map((p) => (
          <Fragment key={p.data.id}>
            <PokemonCard
              p={p}
              style={{ backgroundColor: colors[p.data.types[0].type.name] }}
            />
          </Fragment>
        ))}

      {!!filteredPokemon.length &&
        filteredPokemon.map((p) => (
          <Fragment key={p.data.id}>
            <PokemonCard
              p={p}
              style={{ backgroundColor: colors[p.data.types[0].type.name] }}
            />
          </Fragment>
        ))}

      {!!noResults && (
        <Fragment>
          <p>Nothing to see here</p>
        </Fragment>
      )}
    </section>
  );
};

export default PokemonList;
