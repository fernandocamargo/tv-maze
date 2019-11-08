import { shape, elementType, node } from 'prop-types';
import React from 'react';

const Show = ({
  components: { Container },
  elements: {
    unordered: { title, summary, image, cast, seasons, actions },
  },
}) => (
  <Container>
    {image}
    {title}
    {actions}
    {summary}
    {cast}
    {seasons}
  </Container>
);

Show.propTypes = {
  components: shape({
    Container: elementType.isRequired,
  }).isRequired,
  elements: shape({
    unordered: shape({
      title: node.isRequired,
      summary: node.isRequired,
      image: node.isRequired,
      cast: node.isRequired,
      seasons: node.isRequired,
      actions: node.isRequired,
    }).isRequired,
  }).isRequired,
};

Show.defaultProps = {};

export default Show;
