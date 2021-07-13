import React, { Fragment } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemon }) => {
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
  };

  return (
    <section className='pokemon-list'>
      {pokemon.map((p) => (
        <Fragment key={p.data.id}>
          <PokemonCard
            p={p}
            style={{ backgroundColor: colors[p.data.types[0].type.name] }}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default PokemonList;
