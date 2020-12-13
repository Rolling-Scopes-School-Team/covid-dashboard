import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import globalCasesReducer from './reducers/globalCasesReducer';

const persistedState = {};

const reducers = combineReducers({
  globalCases: globalCasesReducer,
});

const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
