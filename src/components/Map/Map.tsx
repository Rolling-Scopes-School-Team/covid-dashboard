import classNames from 'classnames';
import { LatLngTuple } from 'leaflet';
import React, { useState } from 'react';
import { LayersControl, MapContainer, TileLayer, Popup, Circle, FeatureGroup } from 'react-leaflet';

// import { getSyntheticTrailingComments } from 'typescript';
// import FullScreenIcon from '@/components/Icons/FullScreenIcon';
// import LoupeIcon from '@/components/Icons/LoupeIcon';
// import MapList from '@/components/Map/MapList/MapList';
import styles from '@/components/Map/index.scss';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import { ListState } from '@/types/types';

const options = [
  ['Cases', 'cases'],
  ['Active Cases', 'active'],
  ['Incidence Rate', 'incidence-rate'],
  ['Case-Fatality Ratio', 'fatality-ratio'],
  ['Testing Rate', 'testing-rate'],
];
// const getStatistic = (str: string, countries: Array<CountryType>) => {
//   const array: number[] = [];
//   countries.map(i => array.push(i[str]));
//   return array;
// };

const Map: React.FC<ListState> = ({ countries }) => {
  const [selected, setSelected] = useState(options[0][0]);
  const changeSelected = (newSelected: string) => {
    setSelected(newSelected);
  };
  const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
  const activeSelect = options.filter(e => (e[0] === selected ? e[1] : false));
  const [color, setColor] = useState({ fillColor: 'red', color: 'red' });

  return (
    <div
      className={classNames([
        classes['container'],
        classes['container_l'],
        styles['map'],
        classes['map'],
      ])}
    >
      <div className={styles['map-area']}>
        <DropDown options={options} selected={selected} changeSelected={changeSelected} />
        <div className={classNames([classes['search'], classes['country-cases-search']])}>
          <div className={classes['input']}>
            <input type="input" name="search" placeholder="Search by Country/Region" />
            <button type="button">{/* <LoupeIcon /> */}</button>
          </div>
        </div>
        <MapContainer className={styles['map-container']} center={defaultLatLng} zoom={3}>
          <select
            onChange={event =>
              setColor({
                fillColor: event.target.value,
                color: event.target.value,
              })
            }
          >
            <option value="red">Total confirmed</option>
            <option value="green">Total death</option>
            <option value="blue">New confirmed</option>
          </select>
          <LayersControl position="topleft">
            <LayersControl.BaseLayer checked name="Dark mode">
              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Light mode">
              <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
          </LayersControl>
          {countries.map(country => {
            return (
              <FeatureGroup
                key={country.country}
                eventHandlers={{
                  click: e => {
                    if (e.target) {
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
                      e.target.openPopup();
                    }
                  },
                }}
              >
                <Circle
                  center={[country.countryInfo.lat, country.countryInfo.long]}
                  radius={10000}
                  pathOptions={color}
                  fillOpacity={1}
                />
                <Popup>
                  <div className={styles['leaflet-popup-span']}>
                    <span>
                      <b>Country:</b> {country.country}
                    </span>
                    <span>
                      <b>{selected}: </b> {country[activeSelect[0][1]]}
                    </span>
                  </div>
                </Popup>
              </FeatureGroup>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};
export default Map;
