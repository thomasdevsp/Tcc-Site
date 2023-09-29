import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 150px;
  height: 40px;
  border: 3px solid ${(props) => props.theme['blue-100']};
  border-radius: 2px;
  background: transparent;
  position: relative;
  font-size: 16px;

  color: ${(props) => props.theme['blue-100']};

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 0;
    height: 100%;

    background-color: ${(props) => props.theme['blue-500']};

    z-index: -1;

    transition: all .6s ease-in-out;
  }

    &:before {
      width: 0;
      height: 100%;
    }

    &:hover {
      color: white;
      border-color: ${(props) => props.theme['blue-500']};
      border-radius: 4px;
    &:before {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    background-color: ${(props) => props.theme['blue-500']};
    color: white;
    border: ${(props) => props.theme['blue-500']};
    border-radius: 6px;
  }
` 