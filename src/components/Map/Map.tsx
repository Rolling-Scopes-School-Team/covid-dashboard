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
import { CountryType, ListState } from '@/types/types';

const options = [
  ['Global Cases', 'cases'],
  ['Global Recovered', 'recovered'],
  ['Global Deaths', 'deaths'],

  ['Today cases', 'todayCases'],
  ['Today deaths', 'todayDeaths'],
  ['Today recovered', 'todayRecovered'],

  ['Cases per 100k', 'casesPerOneMillion'],
  ['Deaths per 100k', 'deathsPerOneMillion'],
  ['Recovered per 100k', 'recoveredPerOneMillion'],

  ['Cases per 100k for last day', 'casesPerOneMillion'],
  ['Deaths per 100k for last day', 'deathsPerOneMillion'],
  ['Recovered per 100k for last day', 'recoveredPerOneMillion'],
];
const getStatistic = (str: string, countries: Array<CountryType>) => {
  const array: number[] = [];
  countries.map(i => array.push(i[str]));
  return array;
};

const Map: React.FC<ListState> = ({ countries }) => {
  const [selected, setSelected] = useState(options[0][0]);
  const changeSelected = (newSelected: string) => {
    setSelected(newSelected);
  };
  const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
  const activeSelect = options.filter(e => (e[0] === selected ? e[1] : false));
  const maxNumber = Math.max(...getStatistic(activeSelect[0][1], countries));
  let average = 0;
  if (getStatistic(activeSelect[0][1], countries).length) {
    average =
      getStatistic(activeSelect[0][1], countries).reduce((a, b) => a + b) /
      getStatistic(activeSelect[0][1], countries).length;
  }

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
        <MapContainer className={styles['map-container']} center={defaultLatLng} zoom={3}>
          <LayersControl position="topleft">
            <LayersControl.BaseLayer checked name="Dark mode">
              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Light mode">
              <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
          </LayersControl>
          {countries.map(country => {
            let activeColor = '';
            let rad = 0;
            if (country[activeSelect[0][1]] >= 0 && country[activeSelect[0][1]] < average / 2) {
              activeColor = 'green';
              rad = 10000;
            } else if (
              country[activeSelect[0][1]] > average / 2 &&
              country[activeSelect[0][1]] < average
            ) {
              activeColor = 'orange';
              rad = 30000;
            } else if (
              country[activeSelect[0][1]] > average &&
              country[activeSelect[0][1]] < maxNumber / 2
            ) {
              activeColor = 'red';
              rad = 50000;
            } else {
              activeColor = 'darkred';
              rad = 100000;
            }
            return (
              <FeatureGroup
                key={country.country}
                eventHandlers={{
                  mouseover: (e: { target: { openPopup: () => void } }) => {
                    if (e.target) {
                      e.target.openPopup();
                    }
                  },
                  mouseout: (e: { target: { closePopup: () => void } }) => {
                    if (e.target) {
                      e.target.closePopup();
                    }
                  },
                }}
              >
                <Circle
                  center={[country.countryInfo.lat, country.countryInfo.long]}
                  radius={rad}
                  pathOptions={{ fillOpacity: 1, color: activeColor, fillColor: activeColor }}
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
