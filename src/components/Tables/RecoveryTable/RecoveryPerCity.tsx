import classNames from 'classnames';
import React from 'react';

import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';
import { CountryType } from '@/types/types';

const RecoveryPerCity: React.FC<{ selectedCountry: CountryType }> = ({
  selectedCountry,
}): JSX.Element => {
  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <React.Fragment>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.cases}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Cases
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.deaths}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Deaths
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.recovered}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Recovered
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.active}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Active
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.activePerOneMillion}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Active Per One Million
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.casesPerOneMillion}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Cases Per One Million
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.continent}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Continent
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.critical}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Critical
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.criticalPerOneMillion}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Critical Per One Million
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.deathsPerOneMillion}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Deaths Per One Million
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.oneCasePerPeople}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          One Case Per People
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.oneDeathPerPeople}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          One Death Per People
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.oneTestPerPeople}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          One Test Per People
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.population}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Population
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.recoveredPerOneMillion}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Recovered Per One Million
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.tests}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Tests
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.testsPerOneMillion}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Test Per One Million
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.todayCases}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Today Cases
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.todayDeaths}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Today Deaths
        </span>
      </li>
      <li className={styles['table-item']} key={getRandomArbitrary(0, 1e100)}>
        <span
          className={classNames([styles['counter'], classes['counter'], styles['counter-deaths']])}
        >
          {selectedCountry.todayRecovered}
        </span>
        <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
          Today Recovered
        </span>
      </li>
    </React.Fragment>
  );
};

export default RecoveryPerCity;
