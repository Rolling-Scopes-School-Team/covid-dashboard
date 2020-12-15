import { ActionType } from '@/types/shims';

import ActionTypes from '../ActionTypes';

const globalCasesReducer = (state = 0, action: ActionType) => {
  const { type } = action;

  switch (type) {
    case ActionTypes.FETCH_GLOBAL_CASES_SUCCESS:
      return action.data.TotalConfirmed;

    default:
      return state;
  }
};

export default globalCasesReducer;
