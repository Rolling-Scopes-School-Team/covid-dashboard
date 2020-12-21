import classNames from 'classnames';
import React from 'react';

import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';

const RecoveryPerCity = (): JSX.Element => (
  <li>
    <span className={classNames([classes['counter'], styles['counter-deaths']])}>297,501</span>
    <span className={classNames([styles['counter-value'], styles['counter-deaths-value']])}>
      deaths
    </span>
    <span className={classNames([styles['counter'], styles['counter-recovered']])}>297,501</span>
    <span className={classNames([styles['counter-value'], styles['counter-recovered-value']])}>
      recovered
    </span>
    <span className={styles['country']}>US</span>
  </li>
);

export default RecoveryPerCity;
