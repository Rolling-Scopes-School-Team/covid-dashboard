import React from 'react';

import './index.scss';

import GlobalCases from './GlobalCases/GlobalCases';
import Graph from './Graph/Graph';
import List from './List/List';
import Map from './Map/Map';
import Table from './Table/Table';

const Main = (): JSX.Element => (
  <React.Fragment>
    <GlobalCases />
    <Table />
    <List />
    <Map />
    <Graph />
  </React.Fragment>
);

export default Main;
