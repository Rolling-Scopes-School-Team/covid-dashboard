import React from 'react';

import styles from './index.scss';

const Header = (): JSX.Element => (
  <header className="header">
    <div className={styles.title}>COVID-19 Dashboard</div>
    <div className={styles.subtitle}>
      by the Center for Systems Science and Engineering (CSSE)
      <br />
      at Johns Hopkins University (JHU)
    </div>
  </header>
);

export default Header;
