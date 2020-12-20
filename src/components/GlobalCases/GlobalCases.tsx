import classNames from 'classnames';
import React from 'react';

import styles from '@/components/GlobalCases/index.scss';
// import FullScreenIcon from '@/components/Icons/FullScreenIcon.tsx';
import classes from '@/components/index.scss';
import { GlobalCasesState } from '@/types/types';

const GlobalCases: React.FC<GlobalCasesState> = ({ globalCases }) => {
  return (
    <div
      className={classNames([
        classes['container'],
        classes['container_xs'],
        styles['global-cases'],
      ])}
    >
      <button type="button" className={classes['full-screen-btn']}>
        {/* <FullScreenIcon /> */}
      </button>
      <div className={classNames([classes['heading'], styles['global-cases-heading']])}>
        Global Cases
      </div>
      <div className={classNames([classes['counter'], styles['global-cases-counter']])}>
        {globalCases}
      </div>
    </div>
  );
};

export default GlobalCases;
