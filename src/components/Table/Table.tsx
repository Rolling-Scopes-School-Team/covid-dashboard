import React from 'react';

import './index.scss';
import DeathTable from '../Tables/DeathTable/DeathTable';
import RecoveryTable from '../Tables/RecoveryTable/RecoveryTable';

const Table = (): JSX.Element => (
  <React.Fragment>
    <DeathTable />
    <RecoveryTable />
  </React.Fragment>
);

export default Table;
