import classNames from 'classnames';
import React from 'react';

// import FullScreenIcon from '@/components/Icons/FullScreenIcon.tsx';
// import LoupeIcon from '@/components/Icons/LoupeIcon.tsx';
import styles from '@/components/Tables/DeathTable/index.scss';
import dropdown from '@/components/dropdown.scss';
import classes from '@/components/index.scss';

const RecoveryTable = (): JSX.Element => (
  <div
    className={classNames([
      classes['container'],
      classes['container_s'],
      classes['recovery-cases'],
    ])}
  >
    <button type="button" className={classes['full-screen-btn']}>
      {/* <FullScreenIcon /> */}
    </button>
    <div className={classes['wrapper']}>
      <div className={classNames([classes['dropdown'], dropdown['select-wrapper']])}>
        <div className={dropdown['select']}>
          <div className={dropdown['select__trigger']}>
            <span>US State Level</span>
            <div className={dropdown['arrow']} />
          </div>
          <div className={dropdown['options']}>
            <span className={dropdown['options selected']} data-value="state-level">
              US State Level
            </span>
            <span className={dropdown['options']} data-value="tested">
              Total Test Results in US
            </span>
          </div>
        </div>
      </div>
      <div className={styles['global-counter_recovery']}>Deaths, Recovered</div>
      <div className={classNames([classes['scroll-container'], styles['scroll-container']])}>
        <div className={classNames([classes['list'], styles['recovery-cases-list']])}>
          <ul>
            <li>
              <span className={classNames([classes['counter'], styles['counter-deaths']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-deaths-value']])}
              >
                deaths
              </span>
              <span className={classNames([styles['counter'], styles['counter-recovered']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-recovered-value']])}
              >
                recovered
              </span>
              <span className={styles['city']}>New York</span>
              <span className={styles['country']}>US</span>
            </li>
            <li>
              <span className={classNames([classes['counter'], styles['counter-deaths']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-deaths-value']])}
              >
                deaths
              </span>
              <span className={classNames([styles['counter'], styles['counter-recovered']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-recovered-value']])}
              >
                recovered
              </span>
              <span className={styles['city']}>New York</span>
              <span className={styles['country']}>US</span>
            </li>
            <li>
              <span className={classNames([classes['counter'], styles['counter-deaths']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-deaths-value']])}
              >
                deaths
              </span>
              <span className={classNames([styles['counter'], styles['counter-recovered']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-recovered-value']])}
              >
                recovered
              </span>
              <span className={styles['city']}>New York</span>
              <span className={styles['country']}>US</span>
            </li>
            <li>
              <span className={classNames([classes['counter'], styles['counter-deaths']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-deaths-value']])}
              >
                deaths
              </span>
              <span className={classNames([styles['counter'], styles['counter-recovered']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-recovered-value']])}
              >
                recovered
              </span>
              <span className={styles['city']}>New York</span>
              <span className={styles['country']}>US</span>
            </li>
            <li>
              <span className={classNames([classes['counter'], styles['counter-deaths']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-deaths-value']])}
              >
                deaths
              </span>
              <span className={classNames([styles['counter'], styles['counter-recovered']])}>
                297,501
              </span>
              <span
                className={classNames([styles['counter-value'], styles['counter-recovered-value']])}
              >
                recovered
              </span>
              <span className={styles['city']}>New York</span>
              <span className={styles['country']}>US</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default RecoveryTable;
