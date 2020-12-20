import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GlobalCases from '@/components/GlobalCases/GlobalCases';
import Graph from '@/components/Graph/Graph';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Map from '@/components/Map/Map';
import Table from '@/components/Table/Table';
import { RootState } from '@/redux/ReduxStore';
import { FetchData, FetchDataForGraph } from '@/redux/apiActionCreators/dataActionCreatorAPI';

import './index.scss';

const App = (): JSX.Element => {
  const globalCases = useSelector<RootState, RootState['globalCases']>(
    state => state.globalCases
  );
  const countries = useSelector<RootState, RootState['countries']>(state => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData());
    dispatch(FetchDataForGraph());
  }, []);

  return (
    <React.Fragment>
      <Header />
      <GlobalCases globalCases={globalCases} />
      <Table countries={countries} />
      <List countries={countries} />
      <Map countries={countries} />
      <Graph />
    </React.Fragment>
  );
};

export default App;
