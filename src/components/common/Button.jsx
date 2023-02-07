import React from 'react';
import styled from 'styled-components';

const Button = ({
  children,
  text,
  width,
  height,
  onClick,
  fontSize,
  color,
  colorHover,
  backgroundColor,
  backgroundColorHover,
  position,
  top,
  right,
  left,
  bottom,
  radius,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      colorHover={colorHover}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      position={position}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      radius={radius}
    >
      {children ? children : text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : '3rem')};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.primary};
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
  font-size: ${({ fontSize, theme }) => (fontSize ? fontSize : theme.fonts.size.xsm)};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  border-radius: ${({ radius }) => (radius ? radius : '0.6rem')};
  border: none;
  cursor: pointer;
  position: ${({ position }) => (position ? position : 'static')};
  top: ${({ top }) => (top ? top : '')};
  right: ${({ right }) => (right ? right : '')};
  left: ${({ left }) => (left ? left : '')};
  bottom: ${({ bottom }) => (bottom ? bottom : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${({ backgroundColorHover, theme }) =>
      backgroundColorHover ? backgroundColorHover : theme.colors.hover};
    color: ${({ colorHover, theme }) => (colorHover ? colorHover : theme.colors.white)};
  }
`;

export default Button;
