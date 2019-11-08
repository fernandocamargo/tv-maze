import { string, arrayOf, shape } from 'prop-types';
import React from 'react';

import { Cast as CastList } from 'components/widgets';

import withStyle from './style';

const Cast = ({ className, cast }) =>
  !!cast.length && (
    <dl className={className}>
      <dt>Cast</dt>
      <dd>
        <CastList items={cast} />
      </dd>
    </dl>
  );

Cast.propTypes = {
  className: string.isRequired,
  cast: arrayOf(shape()),
};

Cast.defaultProps = {
  cast: [],
};

export default withStyle(Cast);
