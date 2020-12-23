import classNames from 'classnames';
import React, { useState } from 'react';

import FullScreenIcon from '@/components/Icons/FullScreenIcon';
import styles from '@/components/Tables/DeathTable/index.scss';
import RecoveryPerCity from '@/components/Tables/RecoveryTable/RecoveryPerCity';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import dropdownStyles from '@/components/reusable/DropDown/dropdown.scss';

const options = [
  ['US State Level', 'state-level'],
  ['Total Test Results in US', 'tested'],
];

const RecoveryTable = (): JSX.Element => {
  const [selected, setSelected] = useState(options[0][0]);

  const changeSelected = (newSelected: string) => {
    setSelected(newSelected);
  };

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
        <div className={classNames([classes['dropdown'], dropdownStyles['select-wrapper']])}>
          <DropDown options={options} selected={selected} changeSelected={changeSelected} />
        </div>
        <div className={styles['global-counter_recovery']}>Deaths, Recovered</div>
        <div className={classNames([classes['scroll-container'], styles['scroll-container']])}>
          <div className={classNames([classes['list'], styles['recovery-cases-list']])}>
            <ul>
              <RecoveryPerCity />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryTable;
