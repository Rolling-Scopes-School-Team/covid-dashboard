import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import globalCasesReducer from '@/redux/reducers/globalCasesReducer';
import graphReducer from '@/redux/reducers/graphReducer';
import listReducer from '@/redux/reducers/listReducer';

import selectedCountryReducer from './reducers/selectedCountryReducer';

const persistedState = {};

const reducers = combineReducers({
  globalCases: globalCasesReducer,
  countries: listReducer,
  graph: graphReducer,
  selectedCountry: selectedCountryReducer,
});

const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk)));

export default store;

export type RootState = ReturnType<typeof reducers>;
