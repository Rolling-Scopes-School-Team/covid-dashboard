import axios from 'axios';

import dataAC from '@/redux/actionCreators/dataActionCreator';
import {
  GlobalCasesActionType,
  ListActionType,
  ResponseType,
  CountryForGraph,
  GraphActionType,
} from '@/types/types';

export const FetchData = () => async (
  dispatch: (arg0: GlobalCasesActionType | ListActionType | GraphActionType) => void
) => {
  try {
    const response: ResponseType = await axios.get('https://api.covid19api.com/summary');

    const { data } = response;
    const { Global } = data;
    const { Countries } = data;

    dispatch(dataAC.globalCasesAC(Global));
    dispatch(dataAC.listAC(Countries));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const FetchDataForGraph = () => async (dispatch: (arg0: GraphActionType) => void) => {
  try {
    const responseForGraph: ResponseType = await axios.get(
      'https://api.covid19api.com/dayone/country/south-africa/status/confirmed/live'
    );

    const { data } = responseForGraph;

    dispatch(dataAC.graphAC((data as unknown) as Array<CountryForGraph>));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default { FetchData, FetchDataForGraph };
