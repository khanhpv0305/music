import { handleActions } from 'redux-actions';

import { getRequest, getSuccess, getFailure } from './actions';
import initialState from './initialState';

const reducer = handleActions(
  {
    [getRequest]: (state, actions) => ({
      ...state,
      isLoading: true
    }),
    [getSuccess]: (state, actions) => ({
      ...state,
      ...actions.payload,
      isLoading: false
    }),
    [getFailure]: (state, actions) => ({
      ...state,
      ...actions.payload,
      error: true,
      isLoading: false
    })
  },
  initialState
);

export default reducer;