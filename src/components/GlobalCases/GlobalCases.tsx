import React from 'react';

import { GlobalCasesState } from '@/types/types';

import './index.scss';

const GlobalCases: React.FC<GlobalCasesState> = ({ globalCases }) => {
  return <div>{globalCases}</div>;
};

export default GlobalCases;
