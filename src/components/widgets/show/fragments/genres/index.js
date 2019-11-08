import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Genres = ({ className, genres }) => (
  <dl className={className}>
    <dt>Genres</dt>
    <dd>{genres}</dd>
  </dl>
);

Genres.propTypes = {
  className: string.isRequired,
  genres: string.isRequired,
};

Genres.defaultProps = {};

export default withStyle(Genres);
