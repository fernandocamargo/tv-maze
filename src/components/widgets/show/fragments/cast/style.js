import styled from 'styled-components';

export default component => styled(component)`
  & > dt {
    color: #70877f;
    font-family: 'Arvo', serif;
    font-size: 1rem;
  }

  & > dd {
    margin-top: 1rem;
    max-width: 75vw;
    overflow-x: scroll;
    padding-bottom: 1rem;
  }
`;
