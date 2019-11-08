import { string, shape } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Link = ({ to: { name, url }, className }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    title={name}
    className={className}
  >
    {name}
  </a>
);

Link.propTypes = {
  className: string.isRequired,
  to: shape({
    name: string.isRequired,
    url: string.isRequired,
  }).isRequired,
};

Link.defaultProps = {};

export default withStyle(Link);
