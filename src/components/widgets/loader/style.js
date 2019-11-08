import styled, { keyframes } from 'styled-components';

const loop = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 3.5rem 0 -1.3rem;
  }

  40% {
    box-shadow: 0 3.5rem 0 0;
  }
`;

export default component => styled(component)`
  background-color: rgba(0, 0, 0, 0.25);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  p {
    &,
    &:before,
    &:after {
      animation: ${loop} 1.8s infinite ease-in-out;
      animation-fill-mode: both;
      border-radius: 50%;
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
    }

    & {
      animation-delay: -0.16s;
      color: #fff;
      font-size: 1rem;
      left: 50%;
      position: absolute;
      text-indent: -9999rem;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }

    &:before,
    &:after {
      content: '';
      top: 50%;
      transform: translateY(-50%);
    }

    &:before {
      animation-delay: -0.32s;
      left: -3.5rem;
    }

    &:after {
      left: 3.5rem;
    }
  }
`;
