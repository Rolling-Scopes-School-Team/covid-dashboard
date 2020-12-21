import classNames from 'classnames';
import React from 'react';

import styles from '@/components/Date/index.scss';
// eslint-disable-next-line import/extensions
import FullScreenIcon from '@/components/Icons/FullScreenIcon.tsx';
import classes from '@/components/index.scss';

const Date = (): JSX.Element => (
  <div
    className={classNames([
      classes['container'],
      classes['container_xs'],
      styles['date'],
      classes['date'],
    ])}
  >
    <button type="button" className={classes['full-screen-btn']}>
      <FullScreenIcon />
    </button>
    <div className={classNames([classes['heading'], styles['date-heading']])}>
      Last Updated at (M/D/YYYY)
    </div>
    <div className={classes['update-time']}>
      <span>12/10/2020, 7:26 am</span>
    </div>
  </div>
);

export default Date;
