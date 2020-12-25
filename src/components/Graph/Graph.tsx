import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import styles from '@/components/Graph/index.scss';
import FullScreenIcon from '@/components/Icons/FullScreenIcon';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import { RootState } from '@/redux/ReduxStore';
import { FetchDataForGraph } from '@/redux/apiActionCreators/dataActionCreatorAPI';
import { DataGraph } from '@/types/types';

interface Igraph {
  name: string;
  cases: number;
}

const options = [
  ['Cases by Country', 'Confirmed'],
  ['Active by Country', 'Active'],
  ['Total Deaths by Country', 'Deaths'],
  ['Total Recovered by Country', 'Recovered'],
];

const Graph: React.FC<DataGraph> = ({ dataGraph }): JSX.Element => {
  const selectedCountry = useSelector<RootState, RootState['selectedCountry']>(
    state => state.selectedCountry
  );
  const [selected, setSelected] = useState(options[0][0]);
  const changeSelected = (newSelected: string) => setSelected(newSelected);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchDataForGraph(selectedCountry.country));
  }, []);

  const data: Igraph[] = [];
  const activeSelect = options.filter(e => (e[0] === selected ? e[1] : false));
  // eslint-disable-next-line no-console
  console.log(dataGraph);

  dataGraph.map(i =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data.push({ name: i.Date.slice(0, 10), cases: i[activeSelect[0][1]] })
  );

  return (
    <div
      className={classNames([
        classes['container'],
        classes['container_s'],
        styles['graph'],
        classes['graph'],
      ])}
    >
      <button type="button" className={classes['full-screen-btn']}>
        <FullScreenIcon />
      </button>
      <DropDown options={options} selected={selected} changeSelected={changeSelected} />
      <div className={styles['chart']}>
        <LineChart width={243} height={165} data={data}>
          <Line type="monotone" dataKey="cases" stroke="#17D0FA" />
          <CartesianGrid stroke="white" strokeDasharray="5 5" />
          <XAxis hide dataKey="name" />
          <YAxis hide />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Graph;
