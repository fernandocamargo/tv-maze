import styled from 'styled-components';

export default component => styled(component)`
  dt {
    display: none;
  }

  dd {
    color: #869d96;
    font-family: ${({ theme }) => theme.typography.source};
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;
