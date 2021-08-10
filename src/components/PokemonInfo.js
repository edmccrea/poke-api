import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonInfo.css';

import About from './About';
import Stats from './Stats';
import Evolution from './Evolution';

const PokemonInfo = ({ p, style, setInfoDisplay }) => {
  const [species, setSpecies] = useState({});
  const [showAbout, setShowAbout] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showEvolution, setShowEvolution] = useState(false);
  const [evolutionChain, setEvolutionChain] = useState({});

  const createSpecies = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${p.data.id}`
    );
    setSpecies(res.data);
  };

  useEffect(() => {
    createSpecies();
  }, []);

  const hideSpeciesCard = () => {
    setInfoDisplay(false);
    document.body.style.overflow = 'scroll';
  };

  const toggleAbout = () => {
    if (!showAbout) {
      setShowAbout(true);
      setShowEvolution(false);
      setShowStats(false);
    }
  };

  const toggleStats = () => {
    if (!showStats) {
      setShowAbout(false);
      setShowEvolution(false);
      setShowStats(true);
    }
  };

  const toggleEvolution = () => {
    if (!showEvolution) {
      setShowAbout(false);
      setShowEvolution(true);
      setShowStats(false);
    }
  };

  const lpad = (value, padding) => {
    var zeroes = new Array(padding + 1).join('0');
    return (zeroes + value).slice(-padding);
  };
  return (
    <div className='info-bg modal-open'>
      {!!species.name && (
        <div className='card-container' style={style}>
          <div className='top-section'>
            <h2 className='poke-name'>
              {p.data.name.charAt(0).toUpperCase() + p.data.name.slice(1)}
            </h2>
            <div className='sub-info'>
              <p className='pokemon-type'>
                {p.data.types[0].type.name.charAt(0).toUpperCase() +
                  p.data.types[0].type.name.slice(1)}
              </p>
              <p>#{lpad(p.data.id, 3)}</p>
            </div>
            <div className='line-bg'></div>
            <img
              className='poke-img'
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.data.id}.png`}
              alt={p.data.name}
            />
          </div>

          <div className='info-section'>
            <div className='info-padding'>
              <nav className='info-nav'>
                <ul>
                  <li onClick={toggleAbout}>About</li>
                  <li onClick={toggleStats}>Stats</li>
                  <li onClick={toggleEvolution}>Evolution</li>
                </ul>
              </nav>
              {showAbout && (
                <About
                  species={species}
                  height={p.data.height * 10}
                  weight={p.data.weight / 10}
                />
              )}
              {showStats && <Stats p={p} />}
              {showEvolution && <Evolution species={species} />}
            </div>
            <button className='btn close-btn' onClick={hideSpeciesCard}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
