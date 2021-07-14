import React from 'react';
import pokeball from '../imgs/pokeball.png';
import './PokemonCard.css';

const PokemonCard = ({ p, style }) => {
  const lpad = (value, padding) => {
    var zeroes = new Array(padding + 1).join('0');
    return (zeroes + value).slice(-padding);
  };
  return (
    <div className='card' style={style}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.data.id}.png`}
        alt={p.data.name}
        className='pokemon-img'
      />
      <div className='line'></div>
      <img src={pokeball} alt='pokeball' className='pokeball' />
      <p className='pokemon-id'>#{lpad(p.data.id, 3)}</p>
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
