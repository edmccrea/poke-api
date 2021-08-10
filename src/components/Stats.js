import React, { Fragment } from 'react';
import './Stats.css';

const Stats = ({ p }) => {
  let total = 0;

  const sumTotal = () => {
    p.data.stats.map((stat) => {
      return (total += stat.base_stat);
    });
    return total;
  };

  sumTotal();

  const checkStrength = (num) => {
    let average = total / 6.5;
    if (num > average) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <div className='stat-info'>
        <p className='stat-type'>HP</p>
        <p
          className={
            checkStrength(p.data.stats[0].base_stat) ? 'strong' : 'weak'
          }
        >
          {p.data.stats[0].base_stat}
        </p>
      </div>

      <div className='stat-info'>
        <p className='stat-type'>Attack</p>
        <p
          className={
            checkStrength(p.data.stats[1].base_stat) ? 'strong' : 'weak'
          }
        >
          {p.data.stats[1].base_stat}
        </p>
      </div>

      <div className='stat-info'>
        <p className='stat-type'>Defense</p>
        <p
          className={
            checkStrength(p.data.stats[2].base_stat) ? 'strong' : 'weak'
          }
        >
          {p.data.stats[2].base_stat}
        </p>
      </div>

      <div className='stat-info'>
        <p className='stat-type'>Special Attack</p>
        <p
          className={
            checkStrength(p.data.stats[3].base_stat) ? 'strong' : 'weak'
          }
        >
          {p.data.stats[3].base_stat}
        </p>
      </div>

      <div className='stat-info'>
        <p className='stat-type'>Special Defense</p>
        <p
          className={
            checkStrength(p.data.stats[4].base_stat) ? 'strong' : 'weak'
          }
        >
          {p.data.stats[4].base_stat}
        </p>
      </div>

      <div className='stat-info'>
        <p className='stat-type'>Speed</p>
        <p
          className={
            checkStrength(p.data.stats[5].base_stat) ? 'strong' : 'weak'
          }
        >
          {p.data.stats[5].base_stat}
        </p>
      </div>

      <div className='stat-info'>
        <p className='stat-type'>Total</p>
        <p>{total}</p>
      </div>
    </Fragment>
  );
};

export default Stats;
