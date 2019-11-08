import slugify from 'slugify';
import { string, oneOfType, number } from 'prop-types';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import withStyle from './style';

const Title = ({ className, id, name }) => {
  const url = useMemo(() => `/details/${id}/${slugify(name).toLowerCase()}`, [
    id,
    name,
  ]);

  return (
    <h1 className={className}>
      <Link to={url} title={name}>
        {name}
      </Link>
    </h1>
  );
};

Title.propTypes = {
  className: string.isRequired,
  id: oneOfType([number.isRequired, string.isRequired]).isRequired,
  name: string.isRequired,
};

Title.defaultProps = {};

export default withStyle(Title);
