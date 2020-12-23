import classNames from 'classnames';
import React from 'react';

import styles from '@/components/Footer/index.scss';
import classes from '@/components/index.scss';

const Footer = (): JSX.Element => (
  <footer className={classNames([classes['container'], classes['footer']])}>
    <div className={styles['logo']}>RS SCHOOL</div>
    <div className={styles['github-links']}>
      <ul>
        App developers:
        <li>
          <a href="https://github.com/">
            {/* <object type="image/svg+xml" data="github.svg" className="icon-github" /> */}
            Git account
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            {/* <object type="image/svg+xml" data="github.svg" className="icon-github" /> */}
            Git account
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            {/* <object type="image/svg+xml" data="github.svg" className="icon-github" /> */}
            Git account
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            {/* <object type="image/svg+xml" data="github.svg" className="icon-github" /> */}
            Git account
          </a>
        </li>
      </ul>
      <span className={styles['year']}>2020</span>
    </div>
  </footer>
);

export default Footer;
