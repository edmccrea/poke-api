import React, { Fragment } from 'react';
import './Evolution.css';
import { capitalizeFirst } from '../utils';

const Evolution = ({ evolutionChain }) => {
  const depthFirst = (getChildren) => (node) =>
    [node, ...(getChildren(node) || []).flatMap(depthFirst(getChildren))];

  const makePokeList = (pokes) =>
    depthFirst((node) => node.evolves_to)(pokes.chain).map(
      ({ species }) => species
    );

  const pokes = evolutionChain;

  const idExtractor = (url) => {
    return url.split('/')[6];
  };

  return (
    <Fragment>
      {!!evolutionChain &&
        makePokeList(pokes).map((poke) => (
          <div className='evolve-section' key={idExtractor(poke.url)}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idExtractor(
                poke.url
              )}.png`}
              alt={poke.name}
            />
            <p>{capitalizeFirst(poke.name)}</p>
          </div>
        ))}
    </Fragment>
  );
};

export default Evolution;
