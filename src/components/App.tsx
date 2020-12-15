import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/redux/ReduxStore';
import { CasesReducerFetchData } from '@/redux/apiActionCreators/dataActionCreatorAPI';

import GlobalCases from './GlobalCases/GlobalCases';
import Graph from './Graph/Graph';
import Header from './Header/Header';
import List from './List/List';
import Map from './Map/Map';
import Table from './Table/Table';

const App = (): JSX.Element => {
  const globalCases = useSelector<RootState, RootState['globalCases']>(state => state.globalCases);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CasesReducerFetchData());
  }, []);

  return (
    <React.Fragment>
      <Header />
      <GlobalCases globalCases={globalCases} />
      <Table />
      <List />
      <Map />
      <Graph />
    </React.Fragment>
  );
};

export default App;
