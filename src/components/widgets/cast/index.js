import { string, arrayOf, shape } from 'prop-types';
import React, { useCallback } from 'react';

import Link from './link';
import Figure from './figure';
import withStyle from './style';

const Cast = ({ className, items }) => {
  const renderItem = useCallback(({ person, character }) => {
    const key = `${person.id}x${character.id}`;

    return (
      <dl key={key}>
        <dt>
          <Link to={person} />
          <span> as </span>
          <Link to={character} />
        </dt>
        <dd>
          <Figure of={person} />
          <Figure of={character} />
        </dd>
      </dl>
    );
  }, []);

  return <div className={className}>{items.map(renderItem)}</div>;
};

Cast.propTypes = {
  className: string.isRequired,
  items: arrayOf(
    shape({
      person: shape({}),
      character: shape({}),
    })
  ).isRequired,
};

Cast.defaultProps = {};

export default withStyle(Cast);
