import { string, func, bool } from 'prop-types';
import React, { useRef, useState, useCallback, useEffect } from 'react';

import withStyle from './style';

const Search = ({ className, query, onSearch, loading }) => {
  const ref = useRef();
  const [keywords, setKeywords] = useState(query);
  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      !!keywords.trim() && onSearch(keywords);
    },
    [onSearch, keywords]
  );
  const onChange = useCallback(
    ({ target: { value } }) => setKeywords(value),
    []
  );

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <form className={className} autoComplete="off" onSubmit={onSubmit}>
      <fieldset>
        <legend>Search by keywords:</legend>
        <dl>
          <dt>
            <label htmlFor="keywords">Keywords</label>
          </dt>
          <dd>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={onChange}
              placeholder="Search for a tv show"
              ref={ref}
              disabled={loading}
            />
          </dd>
        </dl>
      </fieldset>
    </form>
  );
};

Search.propTypes = {
  className: string.isRequired,
  query: string.isRequired,
  onSearch: func.isRequired,
  loading: bool,
};

Search.defaultProps = {
  loading: false,
};

export default withStyle(Search);
