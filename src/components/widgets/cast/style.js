import styled from 'styled-components';

export default component => styled(component)`
  flex-direction: row;
  flex-wrap: nowrap;

  &,
  & > dl {
    display: flex;
  }

  & > dl {
    align-self: flex-start;
    flex: 0 0 auto;
    flex-direction: column-reverse;
    width: 210px;

    &:not(:first-of-type) {
      margin-left: 2rem;
    }

    & > dt {
      color: #72727e;
      font-family: ${({ theme }) => theme.typography.source};
      font-size: 0.75rem;
      margin-top: 0.5rem;
      text-transform: uppercase;
    }

    & > dd {
      position: relative;
    }
  }
`;
