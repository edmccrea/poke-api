import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonInfo.css';

import Stat from './Stat';

const PokemonInfo = ({ p, style }) => {
  //   const [species, setSpecies] = useState({});

  //   const createSpecies = async () => {
  //     const res = await axios.get(
  //       `https://pokeapi.co/api/v2/pokemon-species/${p.data.id}`
  //     );
  //     console.log(res);
  //     setSpecies(res.data);
  //     console.log(species);
  //   };

  //   useEffect(() => {
  //     createSpecies();
  //   });

  const lpad = (value, padding) => {
    var zeroes = new Array(padding + 1).join('0');
    return (zeroes + value).slice(-padding);
  };
  return (
    <div className='card-container' style={style}>
      <div className='top-section'>
        <h2>{p.data.name.charAt(0).toUpperCase() + p.data.name.slice(1)}</h2>
        <div className='sub-info'>
          <p>
            {p.data.types[0].type.name.charAt(0).toUpperCase() +
              p.data.types[0].type.name.slice(1)}
          </p>
          <p>#{lpad(p.data.id, 3)}</p>
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.data.id}.png`}
          alt={p.data.name}
        />
      </div>

      <div className='info-section'>
        {/* <p>{species.name}</p>
        <p>{species.flavor_text_entries[0].flavor_text}</p> */}
        <Stat />
      </div>
    </div>
  );
};

export default PokemonInfo;
