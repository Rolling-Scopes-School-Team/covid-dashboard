import classNames from 'classnames';
import React, { useState } from 'react';

import FullScreenIcon from '@/components/Icons/FullScreenIcon';
// import LoupeIcon from '@/components/Icons/LoupeIcon';
import Country from '@/components/List/Country/Country';
import styles from '@/components/List/index.scss';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import dropdownStyles from '@/components/reusable/DropDown/dropdown.scss';
import { ListState } from '@/types/types';

const options = [
  ['Cases by Country', 'cases'],
  ['New Confirmed by Country', 'newConfirmed'],
  ['New Deaths by Country', 'newDeaths'],
  ['Total Deaths by Country', 'totalDeaths'],
  ['New Recovered by Country', 'newRecovered'],
  ['Total Recovered by Country', 'totalRecovered'],
];

const List: React.FC<ListState> = ({ countries }) => {
  const [selected, setSelected] = useState(options[0][0]);

  const changeSelected = (newSelected: string) => setSelected(newSelected);

  return (
    <div
      className={classNames([
        classes['container'],
        classes['container_m'],
        classes['country-cases'],
      ])}
    >
      <button type="button" className={classes['full-screen-btn']}>
        <FullScreenIcon />
      </button>
      <div className={classes['wrapper']}>
        <div className={classNames([classes['dropdown'], dropdownStyles['select-wrapper']])}>
          <DropDown options={options} selected={selected} changeSelected={changeSelected} />
        </div>
        <div className={classNames([classes['search'], classes['country-cases-search']])}>
          <div className={classes['input']}>
            <input type="input" name="search" placeholder="Search by Country/Region" />
            <button type="button">
              <LoupeIcon />
            </button>
          </div>
        </div>
        <div className={classes['scroll-container']}>
          <div className={classNames([classes['list'], styles['country-cases-list']])}>
            <ul>
              <Country countries={countries} selected={selected} options={options} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
