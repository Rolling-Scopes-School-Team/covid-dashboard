import React from 'react';

import './index.scss';
import DeathTable from '@/components/Tables/DeathTable/DeathTable';
import RecoveryTable from '@/components/Tables/RecoveryTable/RecoveryTable';
import { ListState } from '@/types/types';

const Table: React.FC<ListState> = () => (
  <React.Fragment>
    <DeathTable />
    <RecoveryTable />
  </React.Fragment>
);

export default Table;
