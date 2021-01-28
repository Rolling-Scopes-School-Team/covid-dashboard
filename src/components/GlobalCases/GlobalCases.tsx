import classNames from 'classnames';
import React, { useState } from 'react';

import styles from '@/components/GlobalCases/index.scss';
import Close from '@/components/Icons/Close';
import FullScreenIcon from '@/components/Icons/FullScreenIcon';
import classes from '@/components/index.scss';
import { GlobalCasesState } from '@/types/types';

const GlobalCases: React.FC<GlobalCasesState> = ({ globalCases }) => {
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
        styles['global-cases'],
        classes['global-cases'],
      ])}
    >
      <button type="button" className={classes['full-screen-btn']} onClick={handleClick}>
        {screenModeIcon}
      </button>
      <div className={classNames([classes['heading'], styles['global-cases-heading']])}>
        Global Cases
      </div>
      <div className={classNames([classes['counter'], styles['global-cases-counter']])}>
        {globalCases.cases}
      </div>
    </div>
  );
};

export default GlobalCases;
