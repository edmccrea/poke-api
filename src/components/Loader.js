import React, { useState } from 'react';
import { css } from '@emotion/react';
import FadeLoader from 'react-spinners/FadeLoader';
import './Loader.css';

const override = css`
  margin: 0 auto;
  display: block;
`;

const color = '#555555';

const Loader = ({ loading }) => {
  return (
    <div className='loader'>
      <FadeLoader color={color} loading={loading} css={override} size={20} />
      <p className='load-text'>Discovering Pokémon...</p>
    </div>
  );
};

export default Loader;
