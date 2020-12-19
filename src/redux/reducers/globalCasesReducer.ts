import ActionTypes from '@/redux/ActionTypes';
import { GlobalCasesActionType } from '@/types/types';

const globalCasesReducer = (state = 0, action: GlobalCasesActionType) => {
  const { type } = action;

  switch (type) {
    case ActionTypes.FETCH_GLOBAL_CASES_SUCCESS:
      return action.data.TotalConfirmed;

    default:
      return state;
  }
};

export default globalCasesReducer;
