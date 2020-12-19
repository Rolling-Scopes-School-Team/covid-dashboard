import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GlobalCases from '@/components/GlobalCases/GlobalCases';
import Graph from '@/components/Graph/Graph';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Map from '@/components/Map/Map';
import Table from '@/components/Table/Table';
import { RootState } from '@/redux/ReduxStore';
import { CasesReducerFetchData } from '@/redux/apiActionCreators/dataActionCreatorAPI';

const App = (): JSX.Element => {
  const globalCases = useSelector<RootState, RootState['globalCases']>(
    state => state.globalCases
  );
  const countries = useSelector<RootState, RootState['countries']>(state => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CasesReducerFetchData());
  }, []);

  return (
    <React.Fragment>
      <Header />
      <GlobalCases globalCases={globalCases} />
      <Table />
      <List countries={countries} />
      <Map />
      <Graph />
    </React.Fragment>
  );
};

export default App;
