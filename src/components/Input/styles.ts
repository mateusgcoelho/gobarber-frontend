import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  color: #666360;

  border-radius: 10px;
  border: 2px solid #232129;

  width: 100%;
  padding: 16px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #232129 inset;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: #f4ede8 !important;
    }

    background: transparent;

    flex: 1;
    border: 0;

    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
