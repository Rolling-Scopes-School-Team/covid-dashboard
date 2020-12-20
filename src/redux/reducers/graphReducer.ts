import ActionTypes from '@/redux/ActionTypes';
import { GraphActionType } from '@/types/types';

const graphReducer = (state = [], action: GraphActionType) => {
  const { type } = action;
  const { data } = action;

  switch (type) {
    case ActionTypes.FETCH_GRAPH_SUCCESS:
      return [...data];

    default:
      return state;
  }
};

export default graphReducer;
