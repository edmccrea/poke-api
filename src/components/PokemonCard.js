import React from 'react';
import pokeball from '../imgs/pokeball.png';
import './PokemonCard.css';

const PokemonCard = ({ p, style }) => {
  return (
    <div className='card' style={style}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.data.id}.png`}
        alt={p.data.name}
        className='pokemon-img'
      />
      <img src={pokeball} alt='pokeball' className='pokeball' />
      <p className='pokemon-id'>#{p.data.id}</p>
      <h1 className='pokemon-name'>
        {p.data.name.charAt(0).toUpperCase() + p.data.name.slice(1)}
      </h1>
      <p className='pokemon-type'>
        {p.data.types[0].type.name.charAt(0).toUpperCase() +
          p.data.types[0].type.name.slice(1)}
      </p>
    </div>
  );
};

export default PokemonCard;
