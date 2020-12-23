import classNames from 'classnames';
import React from 'react';

import styles from '@/components/Footer/index.scss';
import GitHunIcon from '@/components/Icons/GitHubIcon';
import Logo from '@/components/Icons/Logo';
import classes from '@/components/index.scss';

const Footer = (): JSX.Element => (
  <footer className={classNames([classes['container'], classes['footer']])}>
    <div className={styles['logo']}>
      <Logo />
    </div>
    <div className={styles['github-links']}>
      <ul>
        <span className={styles['devs']}>App developers:</span>
        <li>
          <a href="https://github.com/buiiz">
            <GitHunIcon />
            <span>Ivan Tur</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dmitryzozulia">
            <GitHunIcon />
            <span>Dmitry Zozulia</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/boriskrasko">
            <GitHunIcon />
            <span>Boris Krasko</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Deeathwiing">
            <GitHunIcon />
            <span>Andrey Korotkin</span>
          </a>
        </li>
      </ul>
      <span className={styles['year']}>2020</span>
    </div>
  </footer>
);

export default Footer;
