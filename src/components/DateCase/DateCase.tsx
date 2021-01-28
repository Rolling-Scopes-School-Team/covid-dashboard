import classNames from 'classnames';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '@/components/DateCase/index.scss';
import FullScreenIcon from '@/components/Icons/FullScreenIcon';
import classes from '@/components/index.scss';
import { RootState } from '@/redux/ReduxStore';

import Close from '../Icons/Close';

const DateCase: React.FC = () => {
  const globalCases = useSelector<RootState, RootState['globalCases']>(state => state.globalCases);
  const formatterDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formatterTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const date = new Date(globalCases.updated);
  const formattedDate = formatterDate.format(date);
  const formattedTime = formatterTime.format(date);

  const [isFullScreen, setFullScreen] = useState(true);
  /* eslint-disable */
  const handleClick = (event: any) => {
    event.currentTarget.parentNode.toggleAttribute('full');
    setFullScreen(!isFullScreen);
  };
  let screenModeIcon = isFullScreen ? <FullScreenIcon /> : <Close />;

  return (
    <div
      className={classNames([
        classes['container'],
        classes['container_xs'],
        styles['date'],
        classes['date'],
      ])}
    >
      <button type="button" className={classes['full-screen-btn']} onClick={handleClick}>
        {screenModeIcon}
      </button>
      <div className={classNames([classes['heading'], styles['date-heading']])}>Last Updated</div>
      <div className={classes['update-time']}>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
};

export default DateCase;
