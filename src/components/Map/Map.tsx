import classNames from 'classnames';
import React from 'react';

// import FullScreenIcon from '@/components/Icons/FullScreenIcon.tsx';
// import LoupeIcon from '@/components/Icons/LoupeIcon.tsx';
// import { getSyntheticTrailingComments } from 'typescript';

import styles from '@/components/Map/index.scss';
import dropdown from '@/components/dropdown.scss';
import classes from '@/components/index.scss';
import { ListState } from '@/types/types';

const Map: React.FC<ListState> = () => (
  <div className={classNames([classes['container'], classes['container_l'], styles['map']])}>
    <button type="button" className={classes['full-screen-btn']}>
      {/* <FullScreenIcon /> */}
    </button>
    <div className={styles['map-area']}>
      <div className={dropdown['select']}>
        <div className={dropdown['select__trigger']}>
          <span>Cumulative Cases</span>
          <div className={dropdown['arrow']} />
        </div>
        <div className={dropdown['options']}>
          <span className={dropdown['options selected']} data-value="cumulative">
            Cumulative Cases
          </span>
          <span className={dropdown['options']} data-value="active">
            Active Cases
          </span>
          <span className={dropdown['options']} data-value="incidence-rate">
            Incidence Rate
          </span>
          <span className={dropdown['options']} data-value="fatality-ratio">
            Case-Fatality Ratio
          </span>
          <span className={dropdown['options']} data-value="testing-rate">
            Testing Rate
          </span>
        </div>
      </div>
    </div>
    <div className={classNames([classes['search'], classes['country-cases-search']])}>
      <div className={classes['input']}>
        <input type="input" name="search" placeholder="Search by Country/Region" />
        <button type="button">{/* <LoupeIcon /> */}</button>
      </div>
    </div>
    <div className={styles['map-interactive']}>
      <div className={styles['map-interactive-content']}>
        <div className={styles['map-zoom-in-out']}>
          <button className={styles['zoom-in']} type="button">
            +
          </button>
          <button className={styles['zoom-out']} type="button">
            -
          </button>
        </div>
        <div className={styles['bookmarks-select-panel']}>
          <button className={styles['map-nav-btn']} type="button">
            {/* <img src="bookmark.svg" /> */}
          </button>
          <button className={styles['map-nav-btn']} type="button">
            {/* <img src="legend.svg" /> */}
          </button>
          <button className={styles['map-nav-btn']} type="button">
            {/* <img src="basemaps.svg" /> */}
          </button>
        </div>
        <div className={classNames([styles['bookmarks'], styles['map-nav']])}>
          <button type="button" className={styles['close-btn']}>
            {/* <img src="close.svg" /> */}
          </button>
          <div className={classNames([classes['heading'], styles['bookmark-heading']])}>
            Bookmarks
          </div>
          <div className={classes['scroll-container']}>
            <div className={classNames([classes['list'], styles['bookmark-countrylist']])}>
              <ul>
                <li>Default Map Extent</li>
                <li>Argentina</li>
                <li>Brazil</li>
                <li>Belgium</li>
                <li>Belarus</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classNames([styles['legend'], styles['map-nav']])}>
          <button type="button" className="close-btn">
            {/* <img src="close.svg" /> */}
          </button>
          <div className={styles['legend-heading']}>Legend</div>
          <div className={styles['legend-subheading']}>Cumulative Confirmed Cases</div>
          <div className={styles['legend-confirm']}>Confirmed</div>
          <div className={classes['scroll-container']}>
            <div className={classNames([classes['list'], styles['legend-list']])}>
              <ul>
                <li>
                  <span className={classNames([styles['ellipse'], styles['ellipse100']])} />
                  &gt; 1,000,000 – 5,000,000
                </li>
                <li>
                  <span className={classNames([styles['ellipse'], styles['ellipse50']])} />
                  &gt; 500,000 – 1,000,000
                </li>
                <li>
                  <span className={classNames([styles['ellipse'], styles['ellipse10']])} />
                  &gt; 100,000 – 500,000
                </li>
                <li>
                  <span className={classNames([styles['ellipse'], styles['ellipse5']])} />
                  &gt; 50,000 – 100,000
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classNames([styles['basemaps'], styles['map-nav']])}>
          <button type="button" className={classes['close-btn']}>
            {/* <img src="close.svg" /> */}
          </button>
          <div className={classNames([classes['heading'], styles['basemaps-heading']])}>
            Basemaps
          </div>
          <div className={classes['scroll-container']}>
            <div className={classNames([classes['list'], styles['basemaps-list']])}>
              <ul>
                <li>
                  <span className={styles['box']} />
                  <span className={styles['basemaps-item']}>Imagery</span>
                </li>
                <li>
                  <span className={styles['box']} />
                  <span className={styles['basemaps-item']}>Topographic</span>
                </li>
                <li>
                  <span className={styles['box']} />
                  <span className={styles['basemaps-item']}>Imagery</span>
                </li>
                <li>
                  <span className={styles['box']} />
                  <span className={styles['basemaps-item']}>Imagery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Map;
