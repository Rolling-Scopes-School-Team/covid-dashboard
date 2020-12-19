import axios from 'axios';

import globalCasesAC from '@/redux/actionCreators/dataActionCreator';
import { GlobalCasesActionType, ListActionType, ResponseType } from '@/types/types';

export const CasesReducerFetchData = () => async (
  dispatch: (arg0: GlobalCasesActionType | ListActionType) => void
) => {
  try {
    const response: ResponseType = await axios.get('https://api.covid19api.com/summary');

    const { data } = response;
    const { Global } = data;
    const { Countries } = data;

    dispatch(globalCasesAC.globalCasesAC(Global));
    dispatch(globalCasesAC.listAC(Countries));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default { CasesReducerFetchData };
