import { TVMaze } from 'clients';

export const format = ({
  _embedded: { cast = [], seasons = [] },
  genres = [],
  image,
  ...show
}) => ({
  cast: cast.map(({ character, person }) => ({
    character: { ...character, image: character.image || { medium: '' } },
    person: { ...person, image: person.image || { medium: '' } },
  })),
  seasons: seasons.map(season => ({
    ...season,
    image: season.image || { medium: '' },
  })),
  image: image || { medium: '' },
  genres: genres.join(', '),
  ...show,
});

export default ({ id }) =>
  TVMaze(`shows/${id}`, { embed: ['cast', 'seasons'] }).then(format);
