import React from 'react';

import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';

const DeathPerCountry = (): JSX.Element => (
  <li>
    <span className={classes['counter']}>297,501</span>
    <span className={styles['counter-value']}>deaths</span>
    <span className={styles['country']}>Brazil</span>
  </li>
);

export default DeathPerCountry;
