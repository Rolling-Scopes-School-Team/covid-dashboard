import React from 'react';

import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';
import { ListState } from '@/types/types';

const DeathPerCountry: React.FC<ListState> = ({ countries }): JSX.Element => {
  return (
    <React.Fragment>
      {countries.map(element => (
        <li>
          <span className={classes['counter']}>{element.deaths}</span>
          <span className={styles['counter-value']}>deaths</span>
          <span className={styles['country']}>{element.country}</span>
        </li>
      ))}
    </React.Fragment>
  );
};

export default DeathPerCountry;
