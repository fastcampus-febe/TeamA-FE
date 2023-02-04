import React from 'react';
import styled from 'styled-components';

const Input = ({ name, type, onChange, placeholder, onBlur }) => {
  return (
    <StyledInput
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export default Input;
