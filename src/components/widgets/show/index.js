import update from 'immutability-helper';
import { elementType } from 'prop-types';
import { useMemo, createElement } from 'react';

import Container from './container';
import {
  Actions,
  Cast,
  Genres,
  Image,
  Seasons,
  Summary,
  Title,
} from './fragments';
import Children from './children';

const components = {
  title: Title,
  image: Image,
  genres: Genres,
  summary: Summary,
  cast: Cast,
  seasons: Seasons,
  actions: Actions,
};

const Show = ({ children, ...details }) => {
  const props = useMemo(
    () =>
      Object.entries(components).reduce(
        (stack, [type, component]) => {
          const element = createElement(component, { key: type, ...details });

          return update(stack, {
            elements: {
              ordered: { $push: [element] },
              unordered: { [type]: { $set: element } },
            },
          });
        },
        {
          components: { Container },
          elements: { ordered: [], unordered: {} },
          details,
        }
      ),
    [details]
  );

  return createElement(children, props);
};

Show.propTypes = {
  children: elementType,
};

Show.defaultProps = {
  children: Children,
};

export default Show;
