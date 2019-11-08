import styled from 'styled-components';

export default component => styled(component)`
  dt {
    display: none;
  }

  dd {
    color: #72727e;
    font-family: ${({ theme }) => theme.typography.quicksand};
    font-size: 0.8rem;
    font-weight: 500;
  }

  p {
    text-align: justify;

    &:not(:first-of-type) {
      margin-top: 1rem;
    }
  }
`;
