import React from 'react';

import GlobalCases from './GlobalCases/GlobalCases';
import Graph from './Graph/Graph';
import Header from './Header/Header';
import List from './List/List';
import Map from './Map/Map';
import Table from './Table/Table';

const App = (): JSX.Element => (
  <React.Fragment>
    <Header />
    <GlobalCases />
    <Table />
    <List />
    <Map />
    <Graph />
  </React.Fragment>
);

export default App;
