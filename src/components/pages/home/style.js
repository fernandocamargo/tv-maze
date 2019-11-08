import styled from 'styled-components';

import { Catalog } from 'components/widgets';
import Show from 'components/widgets/show/container';

export default component => styled(component)`
  ${Catalog} {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, calc(210px + 2rem));
    justify-content: center;
    margin: 2rem 0;
  }

  ${Show} {
    padding: 1rem;
    transition: background-color 0.15s linear, box-shadow 0.15s linear;
    width: 210px;

    &:hover {
      background-color: #fff;
      box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);
    }
  }
`;
