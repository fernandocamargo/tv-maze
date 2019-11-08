import { shape, elementType, node } from 'prop-types';
import React from 'react';

const Show = ({
  components: { Container },
  elements: {
    unordered: { title, genres, image },
  },
}) => (
  <Container>
    {image}
    {title}
    {genres}
  </Container>
);

Show.propTypes = {
  components: shape({
    Container: elementType.isRequired,
  }).isRequired,
  elements: shape({
    unordered: shape({
      title: node.isRequired,
      genres: node.isRequired,
      image: node.isRequired,
    }).isRequired,
  }).isRequired,
};

Show.defaultProps = {};

export default Show;
