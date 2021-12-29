import { DECREMENT_COUNT, INCREMENT_COUNT } from '../types/countTypes';

const incrementCount = (payload) => {
  return { type: INCREMENT_COUNT, payload };
};

const decrementCount = (payload) => {
  return { type: DECREMENT_COUNT, payload };
};

export { incrementCount, decrementCount };
