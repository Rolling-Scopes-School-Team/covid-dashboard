import ActionTypes from '@/redux/ActionTypes';
import {
  GlobalCasesActionType,
  ListActionType,
  Global,
  CountryForGraph,
  GraphActionType,
  CountryType,
  SelectedCountryActionType,
} from '@/types/types';

const globalCasesAC = (data: Global): GlobalCasesActionType =>
  ({
    type: ActionTypes.FETCH_GLOBAL_CASES_SUCCESS,
    data,
  } as GlobalCasesActionType);

const listAC = (data: Array<CountryType>): ListActionType =>
  ({
    type: ActionTypes.FETCH_LIST_SUCCESS,
    data,
  } as ListActionType);

const graphAC = (data: Array<CountryForGraph>): GraphActionType =>
  ({
    type: ActionTypes.FETCH_GRAPH_SUCCESS,
    data,
  } as GraphActionType);

const selectedAC = (data: CountryType): SelectedCountryActionType =>
  ({
    type: ActionTypes.SELECT_COUNTRY,
    data,
  } as SelectedCountryActionType);

export default { globalCasesAC, listAC, graphAC, selectedAC };
