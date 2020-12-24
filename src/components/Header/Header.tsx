import classNames from 'classnames';
import React from 'react';

import styles from '@/components/Header/index.scss';
import classes from '@/components/index.scss';

const Header = (): JSX.Element => (
  <header className={classNames([styles['container'], classes['header'], styles['header']])}>
    <div className={styles['header-title']}>COVID-19 Dashboard</div>
  </header>
);

export default Header;
