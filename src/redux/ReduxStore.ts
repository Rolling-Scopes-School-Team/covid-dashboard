import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import globalCasesReducer from '@/redux/reducers/globalCasesReducer';
import listReducer from '@/redux/reducers/listReduce';

const persistedState = {};

const reducers = combineReducers({
  globalCases: globalCasesReducer,
  countries: listReducer,
});

const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk)));

export default store;

export type RootState = ReturnType<typeof reducers>;
