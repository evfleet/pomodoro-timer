import { REHYDRATE } from 'redux-persist/constants';
import * as actionTypes from 'actions/types';

const initialState = {
  loading: true,
  count: 0,
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

    default:
      return state;
  }
};