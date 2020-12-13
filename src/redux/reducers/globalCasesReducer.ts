import ActionTypes from '../ActionTypes';

const globalCasesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_GLOBAL_CASES_SUCCESS:
      const newState = action.data.TotalConfirmed;

      return newState;

    default:
      return state;
  }
};

export default globalCasesReducer;
