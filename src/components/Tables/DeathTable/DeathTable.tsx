import classNames from 'classnames';
import React from 'react';

// import FullScreenIcon from '@/components/Icons/FullScreenIcon.tsx';
// import LoupeIcon from '@/components/Icons/LoupeIcon.tsx';
import DeathsPerCountry from '@/components/Tables/DeathTable/DeathsPerCountry';
import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import dropdownStyles from '@/components/reusable/DropDown/dropdown.scss';

const options = [
  ['Global Deaths', 'deaths'],
  ['Global Recovered', 'recovered'],
];

const DeathTable = (): JSX.Element => (
  <div
    className={classNames([classes['container'], classes['container_s'], classes['death-cases']])}
  >
    <button type="button" className={classes['full-screen-btn']}>
      {/* <FullScreenIcon /> */}
    </button>
    <div className={classes['wrapper']}>
      <div className={classNames([classes['dropdown'], dropdownStyles['select-wrapper']])}>
        <DropDown options={options} />
      </div>

      <div className={styles['global-counter_deaths']}>1,570,642</div>
      <div className={classNames([classes['scroll-container'], styles['scroll-container']])}>
        <div className={classNames([classes['list'], styles['death-cases-list']])}>
          <ul>
            <DeathsPerCountry />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DeathTable;
