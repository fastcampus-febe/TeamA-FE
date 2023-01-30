import React from 'react';
import styled from 'styled-components';

const Button = ({ text, width }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  width: ${({ width }) => width};
  height: 3rem;
  border-radius: 0.6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.xsm};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  ) !important;
`;

export default Button;
