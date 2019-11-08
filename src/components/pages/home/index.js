import { string } from 'prop-types';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { search } from 'services/shows';
import { setShows } from 'reducers/shows/actions';
import { Catalog, Search } from 'components/widgets';

import selector from './selectors';
import withStyle from './style';

const Home = ({ className }) => {
  const dispatch = useDispatch();
  const { query, items } = useSelector(selector);
  const [loading, setLoading] = useState(false);
  const onSearch = useCallback(
    query => {
      setLoading(true);
      search({ query })
        .then(items => dispatch(setShows({ query, items })))
        .catch(console.warn.bind(console, 'catch();'))
        .finally(() => setLoading(false));
    },
    [dispatch]
  );

  return (
    <section className={className}>
      <Search query={query} onSearch={onSearch} loading={loading} />
      <Catalog items={items} loading={loading} />
    </section>
  );
};

Home.propTypes = {
  className: string.isRequired,
};

Home.defaultProps = {};

export default withStyle(Home);
