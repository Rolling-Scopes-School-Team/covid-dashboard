import ActionTypes from '@/redux/ActionTypes';
import { ListActionType } from '@/types/types';

const listReducer = (state = [], action: ListActionType) => {
  const { type } = action;
  const { data } = action;

  switch (type) {
    case ActionTypes.FETCH_LIST_SUCCESS:
      return [...data];

    default:
      return state;
  }
};

export default listReducer;
