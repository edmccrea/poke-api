import React, { Fragment } from 'react';
import './About.css';

const About = ({ species, height, weight }) => {
  return (
    <Fragment>
      <div className='about-info'>
        <p className='about-type'>Species</p>
        <p></p>
      </div>
      <div className='about-info'>
        <p className='about-type'>Height</p>
        <p>{height}cm</p>
      </div>
      <div className='about-info'>
        <p className='about-type'>Weight</p>
        <p>{weight}kg</p>
      </div>
      <p className='poke-description'>
        {species.flavor_text_entries[1].flavor_text}
      </p>
    </Fragment>
  );
};

export default About;
