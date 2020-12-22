import React from 'react';

import classes from '@/components/index.scss';
import { CountryState } from '@/types/types';

const Country: React.FC<CountryState> = ({ countries, selected, options }) => {
  return (
    <React.Fragment>
      {countries.map(element => (
        <li>
          <span className={classes['counter']}>
            {(selected === options[0][0] && element.cases) ||
              (selected === options[1][0] && element.todayCases) ||
              (selected === options[2][0] && element.todayDeaths) ||
              (selected === options[3][0] && element.deaths) ||
              (selected === options[4][0] && element.todayRecovered) ||
              (selected === options[5][0] && element.recovered)}
          </span>
          <span className={classes['country']}>{element.country}</span>
        </li>
      ))}
    </React.Fragment>
  );
};

export default Country;
