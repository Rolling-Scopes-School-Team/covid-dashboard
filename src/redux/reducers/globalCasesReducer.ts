import ActionTypes from '@/redux/ActionTypes';
import { GlobalCasesActionType } from '@/types/types';

const initialState = {
  updated: 0,
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  todayRecovered: 0,
  active: 0,
  critical: 0,
  casesPerOneMillion: 0,
  deathsPerOneMillion: 0,
  tests: 0,
  testsPerOneMillion: 0,
  population: 0,
  oneCasePerPeople: null,
  oneDeathPerPeople: null,
  oneTestPerPeople: null,
  activePerOneMillion: 0,
  recoveredPerOneMillion: 0,
  criticalPerOneMillion: 0,
  affectedCountries: 0,
};

const globalCasesReducer = (state = initialState, action: GlobalCasesActionType) => {
  const { type } = action;

  switch (type) {
    case ActionTypes.FETCH_GLOBAL_CASES_SUCCESS:
      return action.data;

    default:
      return state;
  }
};

export default globalCasesReducer;
