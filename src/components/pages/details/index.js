import { string, shape } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Show } from 'components/widgets';
import { details as getDetailsBy } from 'services/shows';

import CustomShow from './show';
import withStyle from './style';

const Details = ({
  match: {
    params: { id },
  },
  className,
}) => {
  const [show, setShow] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getDetailsBy({ id })
      .then(details => setShow(details))
      .catch(console.warn.bind(console, 'catch();'))
      .finally(() => setLoading(false));

    return () => {};
  }, [id]);

  return (
    <section className={className}>
      <nav>
        <h3>Browse through:</h3>
        <ul>
          <li>
            <Link to="/">Back to home</Link>
          </li>
        </ul>
      </nav>
      {loading ? 'Loading...' : <Show {...show}>{CustomShow}</Show>}
    </section>
  );
};

Details.propTypes = {
  className: string.isRequired,
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
};

Details.defaultProps = {};

export default withStyle(Details);
