import styled from 'styled-components';

export default component => styled(component)`
  color: #525b76;

  &:first-of-type {
    font-weight: bold;
  }

  &:not(:first-of-type) {
    font-style: italic;
  }
`;
