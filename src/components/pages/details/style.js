import styled from 'styled-components';

import Show from 'components/widgets/show/container';
import {
  Actions,
  Cast,
  Image,
  Seasons,
  Summary,
  Title,
} from 'components/widgets/show/fragments';

export default component => styled(component)`
  padding-bottom: 2rem;
  position: relative;

  & > nav {
    position: absolute;
    right: calc(100% + 1rem);
    top: 0;

    h3 {
      display: none;
    }

    a {
      color: #7c898b;
      display: block;
      font-family: ${({ theme }) => theme.typography.source};
      font-size: 0.6rem;
      text-decoration: underline;
      text-transform: uppercase;
      white-space: nowrap;
    }
  }

  ${Show} {
    align-items: end;
    display: grid;
    grid-gap: 1rem;
    grid-template-areas:
      'image title actions'
      'summary summary summary'
      'cast cast cast'
      'seasons seasons seasons';
    grid-template-columns: 210px auto 3.5rem;
  }

  ${Image} {
    grid-area: image;
  }

  ${Title} {
    font-size: 2.5rem;
    grid-area: title;

    a {
      pointer-events: none;
    }
  }

  ${Actions} {
    grid-area: actions;
    text-align: right;
  }

  ${Summary} {
    grid-area: summary;
  }

  ${Cast} {
    grid-area: cast;
  }

  ${Seasons} {
    grid-area: seasons;
  }
`;
