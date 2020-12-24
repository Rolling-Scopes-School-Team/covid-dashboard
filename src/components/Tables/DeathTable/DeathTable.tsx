import classNames from 'classnames';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import FullScreenIcon from '@/components/Icons/FullScreenIcon';
import DeathsPerCountry from '@/components/Tables/DeathTable/DeathsPerCountry';
import styles from '@/components/Tables/DeathTable/index.scss';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import dropdownStyles from '@/components/reusable/DropDown/dropdown.scss';
import { RootState } from '@/redux/ReduxStore';
import { ListState } from '@/types/types';

const options = [
  ['Global Cases', 'cases'],
  ['Global Recovered', 'recovered'],
  ['Global Deaths', 'deaths'],

  ['Today cases', 'todayCases'],
  ['Today deaths', 'todayDeaths'],
  ['Today recovered', 'todayRecovered'],

  ['Cases per 100k', 'casesPerOneMillion'],
  ['Deaths per 100k', 'deathsPerOneMillion'],
  ['Recovered per 100k', 'recoveredPerOneMillion'],

  ['Cases per 100k for last day', 'casesPerOneMillion'],
  ['Deaths per 100k for last day', 'deathsPerOneMillion'],
  ['Recovered per 100k for last day', 'recoveredPerOneMillion'],
];

const DeathTable: React.FC<ListState> = ({ countries }): JSX.Element => {
  const [selected, setSelected] = useState(options[0][0]);
  const globalCases = useSelector<RootState, RootState['globalCases']>(state => state.globalCases);

  const changeSelected = (newSelected: string) => setSelected(newSelected);

  return (
    <div
      className={classNames([classes['container'], classes['container_s'], classes['death-cases']])}
    >
      <button type="button" className={classes['full-screen-btn']}>
        <FullScreenIcon />
      </button>
      <div className={classes['wrapper']}>
        <div className={classNames([classes['dropdown'], dropdownStyles['select-wrapper']])}>
          <DropDown options={options} selected={selected} changeSelected={changeSelected} />
        </div>

        <div className={styles['global-counter_deaths']}>Global Deaths: {globalCases.deaths}</div>
        <div className={classNames([classes['scroll-container'], styles['scroll-container']])}>
          <div className={classNames([classes['list'], styles['death-cases-list']])}>
            <ul>
              <DeathsPerCountry countries={countries} selected={selected} options={options} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeathTable;
