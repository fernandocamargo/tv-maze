import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Loader = ({ className }) => (
  <div className={className}>
    <p>Loading...</p>
  </div>
);

Loader.propTypes = {
  className: string.isRequired,
};

Loader.defaultProps = {};

export default withStyle(Loader);
