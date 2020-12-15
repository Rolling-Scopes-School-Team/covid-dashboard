import axios from 'axios';

import { ActionType, ResponseType } from '@/types/shims';

import globalCasesAC from '../actionCreators/dataActionCreator';

export const CasesReducerFetchData = () => async (dispatch: (arg0: ActionType) => void) => {
  try {
    const response: ResponseType = await axios.get('https://api.covid19api.com/summary');

    const { data } = response;
    const { Global } = data;

    const action: ActionType = globalCasesAC.globalCasesAC(Global);

    dispatch(action);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default { CasesReducerFetchData };
