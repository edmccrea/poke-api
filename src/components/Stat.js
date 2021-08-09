import React from 'react';
import './Stat.css';

const Stat = ({ species }) => {
  return (
    <div>
      <p>{species.flavor_text_entries[1].flavor_text}</p>
    </div>
  );
};

export default Stat;
