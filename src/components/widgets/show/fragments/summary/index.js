import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Summary = ({ className, summary }) => (
  <dl className={className}>
    <dt>Summary</dt>
    <dd dangerouslySetInnerHTML={{ __html: summary }} />
  </dl>
);

Summary.propTypes = {
  className: string.isRequired,
  summary: string.isRequired,
};

Summary.defaultProps = {};

export default withStyle(Summary);
