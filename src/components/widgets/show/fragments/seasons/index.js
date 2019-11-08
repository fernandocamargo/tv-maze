import { string, arrayOf, shape } from 'prop-types';
import React from 'react';

import { Seasons as SeasonsList } from 'components/widgets';

import withStyle from './style';

const Seasons = ({ className, seasons }) =>
  !!seasons.length && (
    <dl className={className}>
      <dt>Seasons</dt>
      <dd>
        <SeasonsList items={seasons} />
      </dd>
    </dl>
  );

Seasons.propTypes = {
  className: string.isRequired,
  seasons: arrayOf(shape()),
};

Seasons.defaultProps = {
  seasons: [],
};

export default withStyle(Seasons);
