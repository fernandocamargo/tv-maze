import styled from 'styled-components';

export default component => styled(component)`
  font-size: 1rem;
  margin-top: 1rem;

  &,
  a {
    color: #525b76;
    font-family: ${({ theme }) => theme.typography.arvo};
    font-weight: 700;
  }

  a {
    display: inline-block;
    text-decoration: none;
    transition: background-color 0.15s linear, color 0.15s linear;

    &:hover {
      color: #f0544f;
    }
  }
`;
