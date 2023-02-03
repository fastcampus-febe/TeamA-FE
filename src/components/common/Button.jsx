import React from 'react';
import styled from 'styled-components';

const Button = ({ text, width, height, onClick, fontSize, color }) => {
  return (
    <StyledButton onClick={onClick} width={width} height={height} fontSize={fontSize} color={color}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : '3rem')};
  background: ${({ color, theme }) => (color ? color : theme.colors.gradient)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ fontSize, theme }) => (fontSize ? fontSize : theme.fonts.size.xsm)};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
`;

export default Button;
