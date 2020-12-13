/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/indent */
import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ActionType, ResponseType } from '@/types/shims';

import globalCasesAC from '../actionCreators/dataActionCreator';

const CasesReducerFetchData = (): ThunkAction<
  void,
  unknown,
  unknown,
  Action<ActionType>
> => async dispatch => {
  try {
    const response: ResponseType = await axios.get('https://api.covid19api.com/summary');

    const { data } = response;
    const { Global } = data;
    const action: ActionType = globalCasesAC(Global);

    dispatch(action);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default { CasesReducerFetchData };
