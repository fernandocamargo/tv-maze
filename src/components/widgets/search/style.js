import styled from 'styled-components';

export default component => styled(component)`
  position: relative;

  legend {
    display: none;
  }

  label {
    cursor: pointer;
    font-size: 0;
    left: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:after {
      color: #d9d9d9;
      content: '\\e8b6';
      display: block;
      font-family: 'Material Icons';
      font-size: 2rem;
      font-weight: 600;
    }
  }

  input[type='text'] {
    background-color: #f6f2f2;
    border: solid 3px transparent;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);
    color: #d9d9d9;
    font-family: 'Lora', serif;
    font-size: 2rem;
    outline: 0;
    padding: 0.5rem 1rem 0.5rem 3rem;
    transition: border-color 0.15s linear, color 0.15s linear;
    width: calc(100% - 4rem - 6px);

    &:focus {
      border-color: #b9abcf;
      color: #b9abcf;
    }

    &::placeholder {
      color: #d9d9d9;
    }
  }

  button {
    display: none;
  }
`;
