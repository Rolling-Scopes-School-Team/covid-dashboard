import classNames from 'classnames';
import React from 'react';

import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';
import { ListState } from '@/types/types';

const RecoveryPerCity: React.FC<ListState> = ({ countries }): JSX.Element => {
  return (
    <React.Fragment>
      {countries.map(element => (
        <li>
          <span className={classNames([classes['counter'], styles['counter-deaths']])}>
            {element.deaths}
          </span>
          <span className={classNames([styles['counter-value'], styles['counter-deaths-value']])}>
            deaths
          </span>
          <span className={classNames([styles['counter'], styles['counter-recovered']])}>
            {element.recovered}
          </span>
          <span
            className={classNames([styles['counter-value'], styles['counter-recovered-value']])}
          >
            recovered
          </span>
          <span className={styles['country']}>{element.country}</span>
        </li>
      ))}
    </React.Fragment>
  );
};

export default RecoveryPerCity;
