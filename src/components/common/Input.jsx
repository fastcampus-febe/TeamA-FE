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
    />
  );
};

const StyledInput = styled.input`
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : '#b0b0b0')};
  border-radius: ${({ radius }) => (radius ? radius : '0.4rem')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '1rem')};
  box-sizing: border-box;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.size.xsm};
  line-height: 1.2rem;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export default Input;
