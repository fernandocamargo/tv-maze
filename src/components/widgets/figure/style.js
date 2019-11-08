import styled from 'styled-components';

export default component => styled(component)`
  img {
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);
    display: block;
    font-size: 0;
    max-height: 295px;
    min-height: 295px;
    max-width: 210px;
    min-width: 210px;

    &[src=''] {
      height: 295px;
      overflow: hidden;
      position: relative;
      width: 210px;

      &:before,
      &:after {
        color: #fff;
        display: block;
        position: absolute;
      }

      &:before {
        background-color: #ffcfdf;
        background-image: linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%);
        content: 'Image not found';
        font-family: 'Source Code Pro', monospace;
        font-size: 1rem;
        font-weight: 300;
        height: 100%;
        left: 0;
        line-height: calc(295px + 2rem);
        text-align: center;
        text-transform: uppercase;
        top: 0;
        width: 100%;
      }

      &:after {
        content: '\\e02c';
        font-family: 'Material Icons';
        font-size: 5rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, calc(-50% - 2rem));
      }
    }
  }

  figcaption {
    display: none;
  }
`;
