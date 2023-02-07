import React from 'react';
import styled from 'styled-components';

const Input = ({
  name,
  type,
  onChange,
  onKeyDown,
  placeholder,
  onBlur,
  width,
  height,
  padding,
  radius,
  borderColor,
  fontSize,
  value,
}) => {
  return (
    <StyledInput
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      padding={padding}
      width={width}
      height={height}
      radius={radius}
      borderColor={borderColor}
      fontSize={fontSize}
      defaultValue={value}
    />
  );
};

const StyledInput = styled.input`
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : '#dddddd')};
  border-radius: ${({ radius }) => (radius ? radius : '0.4rem')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '1rem')};
  box-sizing: border-box;
  outline: none;
  font-size: ${({ fontSize, theme }) => (fontSize ? fontSize : theme.fonts.size.xsm)};
  line-height: 1.2rem;
  accent-color: ${({ theme }) => theme.colors.primary};
  &:focus {
    border: 1px solid #7a7a7a;
  }
`;

export default Input;
