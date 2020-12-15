import { ActionType, Global } from '@/types/shims';

import ActionTypes from '../ActionTypes';

const globalCasesAC = (data: Global): ActionType =>
  ({
    type: ActionTypes.FETCH_GLOBAL_CASES_SUCCESS,
    data,
  } as ActionType);

export default { globalCasesAC };
