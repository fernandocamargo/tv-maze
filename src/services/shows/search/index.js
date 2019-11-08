import { TVMaze } from 'clients';

export const format = items =>
  items.map(({ show: { genres = [], summary, image, ...show }, score }) => ({
    image: image || { medium: '' },
    summary: summary || '',
    genres: genres.join(', '),
    score,
    ...show,
  }));

export default ({ query: q }) => TVMaze('search/shows', { q }).then(format);
