import ActionTypes from '@/redux/ActionTypes';
import { SelectedCountryActionType } from '@/types/types';

const initialState = {
  active: 7344453,
  activePerOneMillion: 22126.96,
  cases: 18473716,
  casesPerOneMillion: 55657,
  continent: 'North America',
  country: '0',
  countryInfo: {
    flag: 'https://disease.sh/assets/img/flags/us.png',
    iso2: 'US',
    iso3: 'USA',
    lat: 38,
    long: -97,
    _id: 840,
  },
  critical: 28069,
  criticalPerOneMillion: 84.56,
  deaths: 326767,
  deathsPerOneMillion: 984,
  oneCasePerPeople: 18,
  oneDeathPerPeople: 1016,
  oneTestPerPeople: 1,
  population: 331923317,
  recovered: 10802496,
  recoveredPerOneMillion: 32545.16,
  tests: 236620567,
  testsPerOneMillion: 712877,
  todayCases: 200109,
  todayDeaths: 1837,
  todayRecovered: 180414,
  updated: 1608671502906,
};

const selectedCountryReducer = (state = initialState, action: SelectedCountryActionType) => {
  const { type } = action;

  switch (type) {
    case ActionTypes.SELECT_COUNTRY:
      return action.data;

    default:
      return state;
  }
};

export default selectedCountryReducer;
