import classNames from 'classnames';
import React from 'react';

import styles from '@/components/Graph/index.scss';
import FullScreenIcon from '@/components/Icons/FullScreenIcon';
import classes from '@/components/index.scss';

const Graph = (): JSX.Element => (
  <div
    className={classNames([
      classes['container'],
      classes['container_s'],
      styles['graph'],
      classes['graph'],
    ])}
  >
    <button type="button" className={classes['full-screen-btn']}>
      <FullScreenIcon />
    </button>
    <div className={classNames([classes['heading'], styles['graph-heading']])}>
      <button type="button">{/* <img src="arrow-left.svg" alt="arrow" /> */}</button>
      <span>Global Chart</span>
      <button type="button">{/* <img src="arrow-right.svg" alt="arrow" /> */}</button>
    </div>
    <div className="chart">{/* <img src="chart.png" alt="chart" /> */}</div>
  </div>
);

export default Graph;
