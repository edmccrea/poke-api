import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import pokeball from '../imgs/pokeball.png';
import './PokemonCard.css';
import { capitalizeFirst, lpad } from '../utils';

import PokemonInfo from './PokemonInfo';

const PokemonCard = ({ p, style }) => {
  const [infoDisplay, setInfoDisplay] = useState(false);
  const [species, setSpecies] = useState({});
  const [evolutionChain, setEvolutionChain] = useState({});

  const createSpecies = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${p.data.id}`
    );
    setSpecies(res.data);
  };
  const getEvolutionChain = async () => {
    const res = await axios.get(species.evolution_chain.url);
    setEvolutionChain(res.data);
  };

  const createSpeciesCard = () => {
    setInfoDisplay(true);
    document.body.style.overflow = 'hidden';
    getEvolutionChain();
  };

  useEffect(() => {
    createSpecies();
  }, []);

  return (
    <Fragment>
      <div className='card' style={style} onClick={createSpeciesCard}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.data.id}.png`}
          alt={p.data.name}
          className='pokemon-img'
        />
        <div className='line'></div>
        <img src={pokeball} alt='pokeball' className='pokeball' />
        <p className='pokemon-id'>#{lpad(p.data.id, 3)}</p>
        <h1 className='pokemon-name'>{capitalizeFirst(p.data.name)}</h1>
        <p className='pokemon-type'>
          {capitalizeFirst(p.data.types[0].type.name)}
        </p>
      </div>

      {infoDisplay && (
        <PokemonInfo
          p={p}
          style={style}
          setInfoDisplay={setInfoDisplay}
          species={species}
          evolutionChain={evolutionChain}
        />
      )}
    </Fragment>
  );
};

export default PokemonCard;
