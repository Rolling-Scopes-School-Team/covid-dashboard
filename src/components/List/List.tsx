import React from 'react';

import './index.scss';
import Country from '@/components/List/Country/Country';
import { ListState } from '@/types/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const List: React.FC<ListState> = ({ countries }) => (
  <React.Fragment>
    <Country />
  </React.Fragment>
);

export default List;
