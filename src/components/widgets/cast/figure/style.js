import styled from 'styled-components';

export default component => styled(component)`
  & + & {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.25s linear;

    &:hover {
      opacity: 1;
    }
  }
`;
