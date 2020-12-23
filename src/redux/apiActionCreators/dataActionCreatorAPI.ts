import axios from 'axios';

import dataAC from '@/redux/actionCreators/dataActionCreator';
import {
  GlobalCasesActionType,
  ListActionType,
  ResponseType,
  CountryForGraph,
  GraphActionType,
  CountryType,
  Global,
} from '@/types/types';

export const FetchData = () => async (
  dispatch: (arg0: ListActionType | GraphActionType) => void
) => {
  try {
    const response: ResponseType = await axios.get(
      'https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=false'
    );

    const { data } = response;

    dispatch(dataAC.listAC((data as unknown) as Array<CountryType>));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const FetchGlobalData = () => async (dispatch: (arg0: GlobalCasesActionType) => void) => {
  try {
    const response: ResponseType = await axios.get(
      'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false&allowNull=true'
    );

    const { data } = response;

    dispatch(dataAC.globalCasesAC((data as unknown) as Global));
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
