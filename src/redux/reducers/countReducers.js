import { DECREMENT_COUNT, INCREMENT_COUNT } from '../types/countTypes';

const initialState = {
  count: 0,
  products: [],
  isAuthenticate: false,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      const newState = {
        ...state,
        count: state.count + 1,
      };
      return newState;
    }

    case DECREMENT_COUNT: {
      if (state.count) {
        const newState = {
          ...state,
          count: state.count - 1,
        };
        return newState;
      }
      break;
    }

    default:
      return state;
  }
};
