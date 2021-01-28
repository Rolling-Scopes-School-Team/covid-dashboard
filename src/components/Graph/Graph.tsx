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

import Close from '../Icons/Close';

interface Igraph {
  name: string;
  cases: number;
}

const options = [
  ['Cases by Country', 'Confirmed'],
  ['Active by Country', 'Active'],
  ['Total Deaths by Country', 'Deaths'],
  ['Total Recovered by Country', 'Recovered'],

  ['Cases per 100k', 'Confirmed per100k'],
  ['Active per 100k', 'Active per100k'],
  ['Death per 100k', 'Deaths per100k'],
  ['Recovered per 100k', 'Recovered per100k'],

  ['New cases', 'Confirmed new'],
  ['New deaths', 'Deaths new'],
  ['New recovered', 'Recovered new'],
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
  }, [dispatch, selectedCountry.country]);

  const [isFullScreen, setFullScreen] = useState(true);
  /* eslint-disable */
  const handleClick = (event: any) => {
    event.currentTarget.parentNode.toggleAttribute('full');
    setFullScreen(!isFullScreen);
  };
  let screenModeIcon = isFullScreen ? <FullScreenIcon /> : <Close />;

  const data: Igraph[] = [];
  const activeSelect = options.filter(e => (e[0] === selected ? e[1] : false));
  const activeSelectArray = activeSelect[0][1].split(' ');
  if (activeSelectArray.length > 1 && activeSelectArray[1] === 'per100k') {
    dataGraph
      .filter(i => !i.Province)
      .map(i =>
        data.push({
          name: i.Date.slice(0, 10),
          cases: Math.floor((i[activeSelectArray[0]] / selectedCountry.population) * 100000),
        })
      );
  } else if (activeSelectArray.length > 1 && activeSelectArray[1] === 'new') {
    dataGraph
      .filter(i => !i.Province)
      .map((value, index) => {
        if (index > 0) {
          data.push({
            name: value.Date.slice(0, 10),
            cases: +value[activeSelectArray[0]] - +dataGraph[index - 1][activeSelectArray[0]],
          });
        }
        return data;
      });
  } else {
    dataGraph
      .filter(i => !i.Province)
      .map(i => data.push({ name: i.Date.slice(0, 10), cases: +i[activeSelectArray[0]] }));
  }

  return (
    <div
      className={classNames([
        classes['container'],
        classes['container_s'],
        styles['graph'],
        classes['graph'],
      ])}
    >
      <button type="button" className={classes['full-screen-btn']} onClick={handleClick}>
        {screenModeIcon}
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
