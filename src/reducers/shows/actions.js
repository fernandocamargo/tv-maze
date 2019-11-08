import { SET_SHOWS } from './constants';

export const setShows = ({ query, items }) => ({
  type: SET_SHOWS,
  query,
  items,
});
