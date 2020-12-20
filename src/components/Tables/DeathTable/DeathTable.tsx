import classNames from 'classnames';
import React from 'react';

// import FullScreenIcon from '@/components/Icons/FullScreenIcon.tsx';
// import LoupeIcon from '@/components/Icons/LoupeIcon.tsx';
import styles from '@/components/Tables/DeathTable/index.scss';
import dropdown from '@/components/dropdown.scss';
import classes from '@/components/index.scss';

const DeathTable = (): JSX.Element => (
  <div
    className={classNames([classes['container'], classes['container_s'], classes['death-cases']])}
  >
    <button type="button" className={classes['full-screen-btn']}>
      {/* <FullScreenIcon /> */}
    </button>
    <div className={classes['wrapper']}>
      <div className={classNames([classes['dropdown'], dropdown['select-wrapper']])}>
        <div className={dropdown['select']}>
          <div className={dropdown['select__trigger']}>
            <span>Global Deaths</span>
            <div className={dropdown['arrow']} />
          </div>
          <div className={dropdown['options']}>
            <span className={dropdown['options selected']} data-value="country">
              Global Deaths
            </span>
            <span className={dropdown['options']} data-value="recovered">
              Global Recovered
            </span>
          </div>
        </div>
      </div>

      <div className={styles['global-counter_deaths']}>1,570,642</div>
      <div className={classNames([classes['scroll-container'], styles['scroll-container']])}>
        <div className={classNames([classes['list'], styles['death-cases-list']])}>
          <ul>
            <li>
              <span className={classes['counter']}>297,501</span>
              <span className={styles['counter-value']}>deaths</span>
              <span className={styles['country']}>Brazil</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DeathTable;
