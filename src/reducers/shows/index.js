import update from 'immutability-helper';

import { SET_SHOWS } from './constants';

export const initialState = { query: '', items: [] };

export default (state = initialState, { type, query, items }) => {
  switch (type) {
    case SET_SHOWS:
      return update(state, {
        query: { $set: query },
        items: { $set: items },
      });
    default:
      return state;
  }
};
