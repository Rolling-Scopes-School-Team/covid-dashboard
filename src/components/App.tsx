import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DateCase from '@/components/DateCase/DateCase';
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
      <main>
        <Header />
        <GlobalCases globalCases={globalCases} />
        <List countries={countries} />
        <DateCase />
        <Map countries={countries} />
        <Table countries={countries} />
        <Graph />
      </main>
    </React.Fragment>
  );
};

export default App;
