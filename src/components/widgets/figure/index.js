import { string } from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';

import withStyle from './style';

const Figure = ({ className, src, caption }) => {
  const [{ loading, error }, setStatus] = useState({
    loading: true,
    error: false,
  });
  const load = useCallback(
    () => setStatus({ loading: false, error: false }),
    []
  );
  const fail = useCallback(
    () => setStatus({ loading: false, error: true }),
    []
  );

  useEffect(() => {
    Object.assign(new Image(), {
      onload: load,
      onabort: fail,
      onerror: fail,
      src,
    });
  }, [src, load, fail]);

  return (
    <figure className={className} aria-busy={loading} aria-invalid={error}>
      <img src={src} alt={caption} title={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

Figure.propTypes = {
  className: string.isRequired,
  src: string.isRequired,
  caption: string,
};

Figure.defaultProps = {};

export default withStyle(Figure);
