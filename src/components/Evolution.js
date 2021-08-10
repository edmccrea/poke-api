import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import './Evolution.css';

const Evolution = ({ species }) => {
  const [evolutionChain, setEvolutionChain] = useState({});
  const getEvolutionChain = async () => {
    const res = await axios.get(species.evolution_chain.url);
    console.log(res.data);
    setEvolutionChain(res.data);
    console.log(evolutionChain);
  };

  return <Fragment>{!!evolutionChain && <p>Hello</p>}</Fragment>;
};

export default Evolution;
