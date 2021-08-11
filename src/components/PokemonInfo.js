import React, { useState } from 'react';
import './PokemonInfo.css';
import { capitalizeFirst, lpad } from '../utils';

import About from './About';
import Stats from './Stats';
import Evolution from './Evolution';

const PokemonInfo = ({ p, style, setInfoDisplay, species, evolutionChain }) => {
  const [showAbout, setShowAbout] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showEvolution, setShowEvolution] = useState(false);

  let about = document.querySelector('.about');
  let stats = document.querySelector('.stats');
  let evolution = document.querySelector('.evolution');

  const hideSpeciesCard = () => {
    setInfoDisplay(false);
    document.body.style.overflow = 'scroll';
  };

  const toggleAbout = () => {
    if (!showAbout) {
      setShowAbout(true);
      setShowEvolution(false);
      setShowStats(false);
      about.classList.add('selected');
      stats.classList.remove('selected');
      evolution.classList.remove('selected');
    }
  };

  const toggleStats = () => {
    if (!showStats) {
      setShowAbout(false);
      setShowEvolution(false);
      setShowStats(true);
      about.classList.remove('selected');
      stats.classList.add('selected');
      evolution.classList.remove('selected');
    }
  };

  const toggleEvolution = () => {
    if (!showEvolution) {
      setShowAbout(false);
      setShowEvolution(true);
      setShowStats(false);
      about.classList.remove('selected');
      stats.classList.remove('selected');
      evolution.classList.add('selected');
    }
  };

  return (
    <div className='info-bg modal-open'>
      {!!species.name && (
        <div className='card-container' style={style}>
          <div className='top-section'>
            <h2 className='poke-name'>{capitalizeFirst(p.data.name)}</h2>
            <div className='sub-info'>
              <p className='pokemon-type'>
                {capitalizeFirst(p.data.types[0].type.name)}
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
                  <li className='about selected' onClick={toggleAbout}>
                    About
                  </li>
                  <li className='stats' onClick={toggleStats}>
                    Stats
                  </li>
                  <li className='evolution' onClick={toggleEvolution}>
                    Evolution
                  </li>
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
              {showEvolution && <Evolution evolutionChain={evolutionChain} />}
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
