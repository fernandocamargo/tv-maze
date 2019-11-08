import styled from 'styled-components';

export default component => styled(component)`
  legend,
  dt {
    display: none;
  }

  label {
    cursor: pointer;
    display: inline-block;
    font-size: 0;

    &:after {
      color: #cbc5ea;
      content: '\\e838';
      display: block;
      font-family: ${({ theme }) => theme.typography.icons};
      font-size: 3rem;
      line-height: 3rem;
      text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
      transition: color 0.25s linear;
    }
  }

  input {
    position: absolute;
    visibility: hidden;

    &:checked + label:after {
      color: #fbb13c;
    }
  }
`;
