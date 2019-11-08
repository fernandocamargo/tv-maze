import styled from 'styled-components';

export default component => styled(component)`
  margin: 0 auto;
  padding: 1rem 0 3rem 0;
  min-height: calc(100vh - 4rem);
  position: relative;
  width: 75vw;

  header {
    display: none;
  }

  footer {
    border-top: solid 1px #d9d9d9;
    bottom: 0;
    color: #b9abcf;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.75rem;
    font-weight: 300;
    left: 0;
    padding: 0.5rem 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    a {
      background-color: #bdd4e7;
      background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
      background-size: cover;
      box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25);
      color: #fff;
      display: inline-block;
      padding: 0.15rem 0.5rem;
      text-decoration: none;
    }
  }
`;
