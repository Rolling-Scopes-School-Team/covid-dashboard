import ActionTypes from '@/redux/ActionTypes';
import {
  GlobalCasesActionType,
  ListActionType,
  Global,
  CountryForGraph,
  GraphActionType,
  CountryType,
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

export default { globalCasesAC, listAC, graphAC };
