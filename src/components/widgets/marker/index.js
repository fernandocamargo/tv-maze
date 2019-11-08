import { string } from 'prop-types';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleMarkAsStarred } from 'reducers/settings/actions';

import selector from './selectors';
import withStyle from './style';

const Marker = ({ className, id }) => {
  const dispatch = useDispatch();
  const { starred } = useSelector(selector(id));
  const onChange = useCallback(() => dispatch(toggleMarkAsStarred(id)), [
    dispatch,
    id,
  ]);
  const identity = `marker-${id}`;

  return (
    <form className={className}>
      <fieldset>
        <legend>Mark this show</legend>
        <dl>
          <dt>Starred</dt>
          <dd>
            <input
              type="checkbox"
              id={identity}
              checked={starred}
              onChange={onChange}
            />
            <label htmlFor={identity}>This show is marked as starred</label>
          </dd>
        </dl>
      </fieldset>
    </form>
  );
};

Marker.propTypes = {
  className: string.isRequired,
};

Marker.defaultProps = {};

export default withStyle(Marker);
