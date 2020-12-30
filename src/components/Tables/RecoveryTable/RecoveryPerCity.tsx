import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';
import { RootState } from '@/redux/ReduxStore';
import { CountryType } from '@/types/types';

const RecoveryPerCity: React.FC<{ selectedCountry: CountryType }> = ({
  selectedCountry,
}): JSX.Element => {
  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const globalCases = useSelector<RootState, RootState['globalCases']>(state => state.globalCases);

  const options = [
    ['cases', 'Cases'],
    ['deaths', 'Deaths'],
    ['recovered', 'Recovered'],
    ['active', 'Active'],
    ['activePerOneMillion', 'Active Per One Million'],
    ['casesPerOneMillion', 'Cases Per One Million'],
    ['continent', 'Continent'],
    ['critical', 'Critical'],
    ['criticalPerOneMillion', 'Critical Per One Million'],
    ['deathsPerOneMillion', 'Deaths Per One Million'],
    ['oneCasePerPeople', 'One Case Per People'],
    ['oneDeathPerPeople', 'One Death Per People'],
    ['oneTestPerPeople', 'One Test Per People'],
    ['population', 'Population'],
    ['recoveredPerOneMillion', 'Recovered Per One Million'],
    ['tests', 'Tests'],
    ['testsPerOneMillion', 'Test Per One Million'],
    ['todayCases', 'Today Cases'],
    ['todayDeaths', 'Today Deaths'],
    ['todayRecovered', 'Today Recovered'],
  ];

  if (selectedCountry.country !== '0') {
    return (
      <React.Fragment>
        {options.map(option => (
          <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
            <span
              className={classNames([
                styles['counter'],
                classes['counter'],
                styles['counter-deaths'],
              ])}
            >
              {selectedCountry[option[0]]}
            </span>
            <span
              className={classNames([styles['counter-value'], styles['counter-recovered-value']])}
            >
              {option[1]}
            </span>
          </li>
        ))}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {options.map(option => (
        <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
          <span
            className={classNames([
              styles['counter'],
              classes['counter'],
              styles['counter-deaths'],
            ])}
          >
            {globalCases[option[0]]}
          </span>
          <span
            className={classNames([styles['counter-value'], styles['counter-recovered-value']])}
          >
            {option[1]}
          </span>
        </li>
      ))}
    </React.Fragment>
  );
};

export default RecoveryPerCity;
