import { REHYDRATE } from 'redux-persist/constants';
import * as actionTypes from 'actions/types';

const initialState = {
  loading: true,
  break: false,
  count: 0,
  tasks: [

  ],
  settings: {
    pomodoroTime: 25,
    breakTime: 5,
    restTime: 15
  }
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REHYDRATE:
      return {
        ...state,
        loading: false,
        count: 0
      };

    case actionTypes.SWAP_TIMER:
      return {
        ...state,
        break: !state.break,
        count: state.count + 1
      };

    case actionTypes.RESET_TIMER:
      return {
        ...state,
        break: false,
        count: 0
      };

    default:
      return state;
  }
};