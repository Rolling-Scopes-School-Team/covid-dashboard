import React from 'react';
import { useDispatch } from 'react-redux';

import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';
import dataAC from '@/redux/actionCreators/dataActionCreator';
import { CountryState, CountryType } from '@/types/types';

const DeathPerCountry: React.FC<CountryState> = ({ countries, selected, options }): JSX.Element => {
  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  const dispatch = useDispatch();

  const handleClick = (element: CountryType) => dispatch(dataAC.selectedAC(element));

  return (
    <React.Fragment>
      {countries.map(element => (
        <li
          className={styles['table-item']}
          key={getRandomArbitrary(0, 1e100)}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          onKeyPress={() => null}
          tabIndex={0}
          onClick={() => handleClick(element)}
        >
          <span className={classes['counter']}>
            {(selected === options[0][0] && element.cases) ||
              (selected === options[1][0] && element.recovered) ||
              (selected === options[2][0] && element.deaths) ||
              (selected === options[3][0] && element.todayCases) ||
              (selected === options[4][0] && element.todayDeaths) ||
              (selected === options[5][0] && element.todayRecovered) ||
              (selected === options[6][0] && (+element.casesPerOneMillion / 10).toFixed(2)) ||
              (selected === options[7][0] && (+element.deathsPerOneMillion / 10).toFixed(2)) ||
              (selected === options[8][0] && (+element.recoveredPerOneMillion / 10).toFixed(2)) ||
              (selected === options[9][0] && (+element.todayCases / 1e5).toFixed(2)) ||
              (selected === options[10][0] && (+element.todayDeaths / 1e5).toFixed(2)) ||
              (selected === options[11][0] && (+element.todayRecovered / 1e5).toFixed(2))}
          </span>
          <span className={styles['counter-value']}>
            {(selected === options[0][0] && options[0][0]) ||
              (selected === options[1][0] && options[1][0]) ||
              (selected === options[2][0] && options[2][0]) ||
              (selected === options[3][0] && options[3][0]) ||
              (selected === options[4][0] && options[4][0]) ||
              (selected === options[5][0] && options[5][0]) ||
              (selected === options[6][0] && options[6][0]) ||
              (selected === options[7][0] && options[7][0]) ||
              (selected === options[8][0] && options[8][0]) ||
              (selected === options[9][0] && options[9][0]) ||
              (selected === options[10][0] && options[10][0]) ||
              (selected === options[11][0] && options[11][0])}
          </span>
          <span className={styles['country']}>{element.country}</span>
        </li>
      ))}
    </React.Fragment>
  );
};

export default DeathPerCountry;
