import { string, arrayOf, shape } from 'prop-types';
import React, { useCallback } from 'react';

import { Figure } from 'components/widgets';

import withStyle from './style';

const Seasons = ({ className, items }) => {
  const renderItem = useCallback(
    ({ image: { medium: image }, id, name, number, url }) => {
      const title = name || `Season #${number}`;

      return (
        <dl key={id}>
          <dt>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              {title}
            </a>
          </dt>
          <dd>
            <Figure src={image} alt={title} caption={title} />
          </dd>
        </dl>
      );
    },
    []
  );

  return <div className={className}>{items.map(renderItem)}</div>;
};

Seasons.propTypes = {
  className: string.isRequired,
  items: arrayOf(shape()).isRequired,
};

Seasons.defaultProps = {};

export default withStyle(Seasons);
