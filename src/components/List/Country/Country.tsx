import React from 'react';

import classes from '@/components/index.scss';

const Country = (): JSX.Element => (
  <li>
    <span className={classes['counter']}>15,386,562</span>
    <span className={classes['country']}>USA</span>
  </li>
);

export default Country;
