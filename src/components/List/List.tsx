import classNames from 'classnames';
import React from 'react';

// import FullScreenIcon from '@/components/Icons/FullScreenIcon.tsx';
// import LoupeIcon from '@/components/Icons/LoupeIcon.tsx';

import Country from '@/components/List/Country/Country';
import styles from '@/components/List/index.scss';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import dropdownStyles from '@/components/reusable/DropDown/dropdown.scss';
import { ListState } from '@/types/types';

const options = [
  ['Cases by Country/Region/Sovereignty', 'country'],
  ['Province/State/Dependency', 'state'],
  ['Cases by US County', 'county'],
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const List: React.FC<ListState> = ({ countries }) => (
  <div
    className={classNames([classes['container'], classes['container_m'], classes['country-cases']])}
  >
    <button type="button" className={classes['full-screen-btn']}>
      {/* <FullScreenIcon /> */}
    </button>
    <div className={classes['wrapper']}>
      <div className={classNames([classes['dropdown'], dropdownStyles['select-wrapper']])}>
        <DropDown options={options} />
      </div>
      <div className={classNames([classes['search'], classes['country-cases-search']])}>
        <div className={classes['input']}>
          <input type="input" name="search" placeholder="Search by Country/Region" />
          <button type="button">{/* <LoupeIcon /> */}</button>
        </div>
      </div>
      <div className={classes['scroll-container']}>
        <div className={classNames([classes['list'], styles['country-cases-list']])}>
          <ul>
            <Country />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default List;
