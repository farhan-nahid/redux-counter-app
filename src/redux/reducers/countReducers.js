import { DECREMENT_COUNT, INCREMENT_COUNT } from '../types/countTypes';

const initialState = {
  count: 0,
  products: [],
  isAuthenticate: false,
};

export const countReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case INCREMENT_COUNT: {
      const newState = {
        ...state,
        count: state.count + payload,
      };
      return newState;
    }

    case DECREMENT_COUNT: {
      const newState = {
        ...state,
        count: state.count - payload,
      };
      return newState;
    }

    default:
      return state;
  }
};
