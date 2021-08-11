import React, { Fragment } from 'react';
import './About.css';
import { capitalizeFirst } from '../utils';

const About = ({ species, height, weight }) => {
  return (
    <Fragment>
      <div className='about-info'>
        <p className='about-type'>Height</p>
        <p>{height}cm</p>
      </div>
      <div className='about-info'>
        <p className='about-type'>Weight</p>
        <p>{weight}kg</p>
      </div>
      <div className='about-info'>
        <p className='about-type'>Habitat</p>
        <p>{capitalizeFirst(species.habitat.name)}</p>
      </div>
      <p className='poke-description'>
        {species.flavor_text_entries[1].flavor_text}
      </p>
    </Fragment>
  );
};

export default About;
