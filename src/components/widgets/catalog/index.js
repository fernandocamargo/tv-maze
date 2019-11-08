import { string, arrayOf, shape, number, bool } from 'prop-types';
import React, { useCallback } from 'react';

import { Show } from 'components/widgets';

import CustomShow from './show';
import withStyle from './style';

const Catalog = ({ className, items }) => {
  const renderItem = useCallback(
    show => (
      <Show key={show.id} {...show}>
        {CustomShow}
      </Show>
    ),
    []
  );

  return <div className={className}>{items.map(renderItem)}</div>;
};

Catalog.propTypes = {
  className: string.isRequired,
  items: arrayOf(
    shape({
      id: number.isRequired,
      image: shape({
        medium: string.isRequired,
      }).isRequired,
      summary: string.isRequired,
      name: string.isRequired,
      genres: string.isRequired,
    })
  ),
  loading: bool,
};

Catalog.defaultProps = {
  items: [],
  loading: false,
};

export default withStyle(Catalog);
