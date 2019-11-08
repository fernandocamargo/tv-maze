import { string, shape } from 'prop-types';
import React from 'react';

import { Figure as Wrapper } from 'components/widgets';

import withStyle from './style';

const Figure = ({
  of: {
    image: { medium: image },
    name,
  },
  className,
}) => <Wrapper src={image} alt={name} caption={name} className={className} />;

Figure.propTypes = {
  className: string.isRequired,
  of: shape({
    image: shape({
      medium: string.isRequired,
    }).isRequired,
    name: string.isRequired,
  }).isRequired,
};

Figure.defaultProps = {};

export default withStyle(Figure);
