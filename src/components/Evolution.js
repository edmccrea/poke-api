import React, { Fragment } from 'react';
import './Evolution.css';
import { capitalizeFirst } from '../utils';

const Evolution = ({ evolutionChain }) => {
  return (
    <Fragment>
      {!!evolutionChain && (
        //Loop Through the chain and check if evolves to is true. If so enter it and take the species name and sprite, then check again if evolves to exists.
        <div className='evolve-section'>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
            alt={evolutionChain.chain.species.name}
          />
          <p>{capitalizeFirst(evolutionChain.chain.species.name)}</p>
        </div>
      )}
    </Fragment>
  );
};

export default Evolution;
