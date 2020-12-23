import classNames from 'classnames';
import { LatLngTuple } from 'leaflet';
import React, { useState } from 'react';
import { LayersControl, MapContainer, TileLayer, Popup, Circle, FeatureGroup } from 'react-leaflet';

// import { getSyntheticTrailingComments } from 'typescript';
// import FullScreenIcon from '@/components/Icons/FullScreenIcon';
// import LoupeIcon from '@/components/Icons/LoupeIcon';
// import MapList from '@/components/Map/MapList/MapList';
import coordinates from '@/components/Map/coordinates';
import styles from '@/components/Map/index.scss';
import classes from '@/components/index.scss';
import DropDown from '@/components/reusable/DropDown/DropDown';
import { ListState } from '@/types/types';

const options = [
  ['Cumulative Cases', 'cumulative'],
  ['Active Cases', 'active'],
  ['Incidence Rate', 'incidence-rate'],
  ['Case-Fatality Ratio', 'fatality-ratio'],
  ['Testing Rate', 'testing-rate'],
];
// const getStatistic = (str: string, countries: CountryType[]) => {
//   const array: number[] = [];
//   countries.map(i => array.push(i[str]));
//   return array;
// };

const Map: React.FC<ListState> = ({ countries }) => {
  const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
  const [color, setColor] = useState({ fillColor: 'red', color: 'red' });
  // console.log((Math.max(...getStatistic('NewDeaths', countries)) / 3));
  // console.log(Math.min(...getStatistic('NewDeaths', countries)));

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
        <DropDown options={options} />
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
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const { lat, long }: { lat: string; long: string } = coordinates[
              country.CountryCode.toLowerCase()
            ];
            return (
              <FeatureGroup
                key={country.Country}
                eventHandlers={{
                  mouseover: e => {
                    if (e.target) {
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
                      e.target.openPopup();
                    }
                  },
                }}
              >
                <Circle center={[+lat, +long]} radius={10000} pathOptions={color} fillOpacity={1} />
                <Popup>
                  <div className={styles['leaflet-popup-span']}>
                    <span>
                      <b>Country:</b> {country.Country}
                    </span>
                    <span>
                      <b>Total confirmed:</b> {country.TotalConfirmed}
                    </span>
                    <span>
                      <b>Total deaths:</b> {country.TotalDeaths}
                    </span>
                    <span>
                      <b>Total recovered:</b> {country.TotalRecovered}
                    </span>
                    <span>
                      <b>New confirmed:</b> {country.NewConfirmed}
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
