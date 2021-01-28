import classNames from 'classnames';
import React, { useState, ChangeEvent } from 'react';

import FullScreenIcon from '@/components/Icons/FullScreenIcon';
import KeyboardIcon from '@/components/Icons/KeyboardIcon';
import LoupeIcon from '@/components/Icons/LoupeIcon';
import KeyboardWrapper from '@/components/KeyboardWrapper';
import Country from '@/components/List/Country/Country';
import styles from '@/components/List/index.scss';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import dropdownStyles from '@/components/reusable/DropDown/dropdown.scss';
import { ListState } from '@/types/types';

import Close from '../Icons/Close';

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
  const [input, setInput] = useState('');
  const [isKeyboardHidden, setIsKeyboardHidden] = useState(true);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const [isFullScreen, setFullScreen] = useState(true);
  /* eslint-disable */
  const handleClick = (event: any) => {
    event.currentTarget.parentNode.toggleAttribute('full');
    setFullScreen(!isFullScreen);
  };
  let screenModeIcon = isFullScreen ? <FullScreenIcon /> : <Close />;

  return (
    <React.Fragment>
      <div
        className={classNames([
          classes['container'],
          classes['container_m'],
          classes['country-cases'],
        ])}
      >
        <button type="button" className={classes['full-screen-btn']} onClick={handleClick}>
          {screenModeIcon}
        </button>
        <div className={classes['wrapper']}>
          <div className={classNames([classes['dropdown'], dropdownStyles['select-wrapper']])}>
            <DropDown options={options} selected={selected} changeSelected={changeSelected} />
          </div>
          <div className={classNames([classes['search'], classes['country-cases-search']])}>
            <div className={classes['input']}>
              <input
                type="search"
                name="search"
                value={input}
                autoComplete="off"
                placeholder="Search"
                onChange={onChangeInput}
              />
              <button type="button" onClick={() => setIsKeyboardHidden(!isKeyboardHidden)}>
                <KeyboardIcon className={styles['keyboard-toggle']} />
              </button>
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
      <KeyboardWrapper onChange={setInput} isKeyboardHidden={isKeyboardHidden} />
    </React.Fragment>
  );
};

export default List;
