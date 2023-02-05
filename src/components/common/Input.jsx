import React from 'react';
import styled from 'styled-components';

const Input = ({
  name,
  type,
  onChange,
  placeholder,
  onBlur,
  width,
  height,
  padding,
  radius,
  borderColor,
}) => {
  return (
    <>
      {type === 'checkbox' ? (
        <StyledInput
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      ) : (
        <InputContainer
          padding={padding}
          width={width}
          height={height}
          radius={radius}
          borderColor={borderColor}
        >
          <StyledInput
            name={name}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        </InputContainer>
      )}
    </>
  );
};

const InputContainer = styled.div`
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : '#b0b0b0')};
  border-radius: ${({ radius }) => (radius ? radius : '0.4rem')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '1rem')};
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.size.xsm};
  line-height: 1.2rem;
  width: 100%;
  height: 100%;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export default Input;
