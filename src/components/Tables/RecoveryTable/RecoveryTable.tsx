import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

import FullScreenIcon from '@/components/Icons/FullScreenIcon';
import styles from '@/components/Tables/DeathTable/index.scss';
import RecoveryPerCity from '@/components/Tables/RecoveryTable/RecoveryPerCity';
import RecoveryTableStyles from '@/components/Tables/RecoveryTable/index.scss';
import classes from '@/components/index.scss';
import { RootState } from '@/redux/ReduxStore';
import { ListState } from '@/types/types';

const RecoveryTable: React.FC<ListState> = (): JSX.Element => {
  const selectedCountry = useSelector<RootState, RootState['selectedCountry']>(
    state => state.selectedCountry
  );

  return (
    <div
      className={classNames([
        classes['container'],
        classes['container_s'],
        classes['recovery-cases'],
      ])}
    >
      <button type="button" className={classes['full-screen-btn']}>
        <FullScreenIcon />
      </button>
      <div className={classes['wrapper']}>
        <div className={styles['global-counter_recovery']}>{selectedCountry.country}</div>
        <div
          className={classNames([
            classes['scroll-container'],
            RecoveryTableStyles['scroll-container'],
          ])}
        >
          <div className={classNames([classes['list'], styles['recovery-cases-list']])}>
            <ul>
              <RecoveryPerCity selectedCountry={selectedCountry} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryTable;
