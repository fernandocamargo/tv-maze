import { string, shape } from 'prop-types';
import React from 'react';

import { Figure } from 'components/widgets';

import withStyle from './style';

const Image = ({ image: { medium: image }, className, name }) => (
  <dl className={className}>
    <dt>Image</dt>
    <dd>
      <Figure src={image} caption={name} />
    </dd>
  </dl>
);

Image.propTypes = {
  className: string.isRequired,
  image: shape({
    medium: string.isRequired,
  }).isRequired,
  name: string.isRequired,
};

Image.defaultProps = {};

export default withStyle(Image);
