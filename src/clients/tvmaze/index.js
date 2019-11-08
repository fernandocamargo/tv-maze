import { stringify } from 'qs';

const TVMaze = (path, params) => {
  const querystring = stringify(params);
  const url = ` http://api.tvmaze.com/${path}?${querystring}`;

  return window.fetch(url).then(response => response.json());
};

export default TVMaze;
